<?php
declare(strict_types=1);

require_once __DIR__ . '/../helpers.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    json_response(['ok' => false, 'error' => 'method_not_allowed'], 405);
}

$data = read_json();
require_fields($data, ['phone', 'password']);

$phone = normalize_phone((string)$data['phone']);
$password = (string)$data['password'];

$stmt = db()->prepare('SELECT id, phone, name, password_hash FROM users WHERE phone = ? LIMIT 1');
$stmt->execute([$phone]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['password_hash'])) {
    json_response(['ok' => false, 'error' => 'wrong_phone_or_password'], 401);
}

$token = random_token();
$expiresAt = (new DateTimeImmutable('+30 days'))->format('Y-m-d H:i:s');

$stmt = db()->prepare('INSERT INTO sessions (user_id, token, expires_at) VALUES (?, ?, ?)');
$stmt->execute([(int)$user['id'], $token, $expiresAt]);

json_response([
    'ok' => true,
    'token' => $token,
    'user' => [
        'id' => (int)$user['id'],
        'phone' => $user['phone'],
        'name' => $user['name'],
        'provider' => 'phone',
    ],
]);
