<?php
declare(strict_types=1);

require_once __DIR__ . '/../helpers.php';

function result_row(array $row): array
{
    return [
        'id' => (int)$row['id'],
        'bookingId' => $row['booking_id'] === null ? null : (int)$row['booking_id'],
        'patientName' => $row['patient_name'],
        'phone' => $row['phone'],
        'test' => $row['test_name'],
        'dept' => $row['department'],
        'pdfName' => $row['pdf_original_name'],
        'uploadedAt' => $row['uploaded_at'],
        'downloadUrl' => '../api/results/download.php?id=' . (int)$row['id'],
    ];
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'GET') {
    if (is_base_request()) {
        $stmt = db()->query('SELECT * FROM results ORDER BY uploaded_at DESC');
        json_response(['ok' => true, 'results' => array_map('result_row', $stmt->fetchAll())]);
    }

    $user = current_user();
    $stmt = db()->prepare('SELECT * FROM results WHERE user_id = ? ORDER BY uploaded_at DESC');
    $stmt->execute([(int)$user['id']]);
    json_response(['ok' => true, 'results' => array_map('result_row', $stmt->fetchAll())]);
}

if ($method === 'POST') {
    require_base();

    $bookingId = (int)($_POST['bookingId'] ?? 0);
    $testName = trim((string)($_POST['test'] ?? 'Lab Result'));
    $department = trim((string)($_POST['dept'] ?? 'Laboratory'));

    if ($bookingId < 1 || empty($_FILES['pdf'])) {
        json_response(['ok' => false, 'error' => 'missing_booking_or_pdf'], 422);
    }

    $file = $_FILES['pdf'];
    if (($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) {
        json_response(['ok' => false, 'error' => 'upload_failed'], 400);
    }

    if (($file['size'] ?? 0) > MAX_PDF_BYTES) {
        json_response(['ok' => false, 'error' => 'pdf_too_large'], 422);
    }

    $mime = mime_content_type((string)$file['tmp_name']);
    $ext = strtolower(pathinfo((string)$file['name'], PATHINFO_EXTENSION));
    if ($mime !== 'application/pdf' || $ext !== 'pdf') {
        json_response(['ok' => false, 'error' => 'pdf_only'], 422);
    }

    $stmt = db()->prepare(
        'SELECT bookings.*, users.id AS result_user_id
         FROM bookings
         INNER JOIN users ON users.id = bookings.user_id
         WHERE bookings.id = ?
         LIMIT 1'
    );
    $stmt->execute([$bookingId]);
    $booking = $stmt->fetch();
    if (!$booking) {
        json_response(['ok' => false, 'error' => 'booking_not_found'], 404);
    }

    if (!is_dir(UPLOAD_DIR)) {
        mkdir(UPLOAD_DIR, 0775, true);
    }

    $storedName = 'result_' . $bookingId . '_' . date('Ymd_His') . '_' . bin2hex(random_bytes(6)) . '.pdf';
    $storedPath = UPLOAD_DIR . '/' . $storedName;

    if (!move_uploaded_file((string)$file['tmp_name'], $storedPath)) {
        json_response(['ok' => false, 'error' => 'could_not_save_pdf'], 500);
    }

    $stmt = db()->prepare(
        'INSERT INTO results
         (booking_id, user_id, patient_name, phone, test_name, department, pdf_original_name, pdf_file_name)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    );
    $stmt->execute([
        $bookingId,
        (int)$booking['result_user_id'],
        $booking['patient_name'],
        $booking['phone'],
        $testName,
        $department,
        basename((string)$file['name']),
        $storedName,
    ]);

    $resultId = (int)db()->lastInsertId();
    $stmt = db()->prepare('SELECT * FROM results WHERE id = ?');
    $stmt->execute([$resultId]);

    json_response(['ok' => true, 'result' => result_row($stmt->fetch())], 201);
}

if ($method === 'DELETE') {
    require_base();
    $id = (int)($_GET['id'] ?? 0);

    $stmt = db()->prepare('SELECT pdf_file_name FROM results WHERE id = ?');
    $stmt->execute([$id]);
    $result = $stmt->fetch();

    if ($result) {
        $path = UPLOAD_DIR . '/' . $result['pdf_file_name'];
        if (is_file($path)) {
            unlink($path);
        }
    }

    $stmt = db()->prepare('DELETE FROM results WHERE id = ?');
    $stmt->execute([$id]);

    json_response(['ok' => true]);
}

json_response(['ok' => false, 'error' => 'method_not_allowed'], 405);
