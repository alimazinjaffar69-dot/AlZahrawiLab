<?php
declare(strict_types=1);

require_once __DIR__ . '/../helpers.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'GET') {
    json_response(['ok' => false, 'error' => 'method_not_allowed'], 405);
}

$id = (int)($_GET['id'] ?? 0);

$stmt = db()->prepare('SELECT * FROM results WHERE id = ? LIMIT 1');
$stmt->execute([$id]);
$result = $stmt->fetch();

if (!$result) {
    json_response(['ok' => false, 'error' => 'result_not_found'], 404);
}

if (!is_base_request()) {
    $user = current_user();
    if ((int)$result['user_id'] !== (int)$user['id']) {
        json_response(['ok' => false, 'error' => 'forbidden'], 403);
    }
}

$path = UPLOAD_DIR . '/' . $result['pdf_file_name'];
if (!is_file($path)) {
    json_response(['ok' => false, 'error' => 'pdf_missing'], 404);
}

header('Content-Type: application/pdf');
header('Content-Disposition: inline; filename="' . basename($result['pdf_original_name']) . '"');
header('Content-Length: ' . filesize($path));
readfile($path);
exit;
