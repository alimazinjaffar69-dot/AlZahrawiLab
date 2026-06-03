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
$name = trim((string)($data['name'] ?? $phone));

if (strlen($phone) < 6 || strlen($password) < 6) {
    json_response(['ok' => false, 'error' => 'invalid_phone_or_password'], 422);
}

try {
    $stmt = db()->prepare(
        'INSERT INTO users (phone, name, password_hash) VALUES (?, ?, ?)'
    );
    $stmt->execute([$phone, $name, password_hash($password, PASSWORD_DEFAULT)]);
} catch (PDOException $e) {
    if ($e->getCode() === '23000') {
        json_response(['ok' => false, 'error' => 'account_exists'], 409);
    }
    throw $e;
}

$userId = (int)db()->lastInsertId();
$token = random_token();
$expiresAt = (new DateTimeImmutable('+30 days'))->format('Y-m-d H:i:s');

$stmt = db()->prepare('INSERT INTO sessions (user_id, token, expires_at) VALUES (?, ?, ?)');
$stmt->execute([$userId, $token, $expiresAt]);

json_response([
    'ok' => true,
    'token' => $token,
    'user' => [
        'id' => $userId,
        'phone' => $phone,
        'name' => $name,
        'provider' => 'phone',
    ],
]);
