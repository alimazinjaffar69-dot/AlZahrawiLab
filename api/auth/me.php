<?php
declare(strict_types=1);

require_once __DIR__ . '/../helpers.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'GET') {
    json_response(['ok' => false, 'error' => 'method_not_allowed'], 405);
}

$user = current_user();

json_response([
    'ok' => true,
    'user' => [
        'id' => (int)$user['id'],
        'phone' => $user['phone'],
        'name' => $user['name'],
        'provider' => 'phone',
    ],
]);
