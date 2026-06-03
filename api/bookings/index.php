<?php
declare(strict_types=1);

require_once __DIR__ . '/../helpers.php';

function booking_row(array $row): array
{
    return [
        'id' => (int)$row['id'],
        'patientName' => $row['patient_name'],
        'sickness' => $row['sickness'],
        'phone' => $row['phone'],
        'visitDate' => $row['visit_date'],
        'visitTime' => substr((string)$row['visit_time'], 0, 5),
        'status' => $row['status'],
        'createdAt' => $row['created_at'],
        'userId' => (int)$row['user_id'],
    ];
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'GET') {
    if (is_base_request()) {
        $stmt = db()->query(
            'SELECT * FROM bookings ORDER BY visit_date ASC, visit_time ASC, created_at DESC'
        );
        json_response(['ok' => true, 'bookings' => array_map('booking_row', $stmt->fetchAll())]);
    }

    $user = current_user();
    $stmt = db()->prepare(
        'SELECT * FROM bookings WHERE user_id = ? ORDER BY visit_date DESC, visit_time DESC, created_at DESC'
    );
    $stmt->execute([(int)$user['id']]);
    json_response(['ok' => true, 'bookings' => array_map('booking_row', $stmt->fetchAll())]);
}

if ($method === 'POST') {
    $user = current_user();
    $data = read_json();
    require_fields($data, ['patientName', 'sickness', 'phone', 'visitDate', 'visitTime']);

    $stmt = db()->prepare(
        'INSERT INTO bookings (user_id, patient_name, sickness, phone, visit_date, visit_time)
         VALUES (?, ?, ?, ?, ?, ?)'
    );
    $stmt->execute([
        (int)$user['id'],
        trim((string)$data['patientName']),
        trim((string)$data['sickness']),
        normalize_phone((string)$data['phone']),
        trim((string)$data['visitDate']),
        trim((string)$data['visitTime']),
    ]);

    $id = (int)db()->lastInsertId();
    $stmt = db()->prepare('SELECT * FROM bookings WHERE id = ?');
    $stmt->execute([$id]);
    json_response(['ok' => true, 'booking' => booking_row($stmt->fetch())], 201);
}

if ($method === 'PUT') {
    require_base();
    $id = (int)($_GET['id'] ?? 0);
    $data = read_json();
    require_fields($data, ['status']);

    $stmt = db()->prepare('UPDATE bookings SET status = ? WHERE id = ?');
    $stmt->execute([trim((string)$data['status']), $id]);

    json_response(['ok' => true]);
}

if ($method === 'DELETE') {
    $id = (int)($_GET['id'] ?? 0);

    if (is_base_request()) {
        $stmt = db()->prepare('DELETE FROM bookings WHERE id = ?');
        $stmt->execute([$id]);
        json_response(['ok' => true]);
    }

    $user = current_user();
    $stmt = db()->prepare('DELETE FROM bookings WHERE id = ? AND user_id = ?');
    $stmt->execute([$id, (int)$user['id']]);
    json_response(['ok' => true]);
}

json_response(['ok' => false, 'error' => 'method_not_allowed'], 405);
