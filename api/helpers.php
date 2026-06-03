<?php
declare(strict_types=1);

require_once __DIR__ . '/db.php';

function apply_cors(): void
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if ($origin && in_array($origin, ALLOWED_ORIGINS, true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
        header('Vary: Origin');
    }

    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Base-Key');
    header('Access-Control-Max-Age: 86400');

    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}

function json_response(array $data, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function read_json(): array
{
    $raw = file_get_contents('php://input') ?: '';
    if ($raw === '') {
        return [];
    }

    $data = json_decode($raw, true);
    if (!is_array($data)) {
        json_response(['ok' => false, 'error' => 'invalid_json'], 400);
    }

    return $data;
}

function require_fields(array $data, array $fields): void
{
    foreach ($fields as $field) {
        if (!isset($data[$field]) || trim((string)$data[$field]) === '') {
            json_response(['ok' => false, 'error' => 'missing_' . $field], 422);
        }
    }
}

function normalize_phone(string $phone): string
{
    return preg_replace('/\s+/', '', trim($phone)) ?? '';
}

function bearer_token(): string
{
    $header = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    if (stripos($header, 'Bearer ') === 0) {
        return trim(substr($header, 7));
    }
    return '';
}

function current_user(): array
{
    $token = bearer_token();
    if ($token === '') {
        json_response(['ok' => false, 'error' => 'missing_token'], 401);
    }

    $stmt = db()->prepare(
        'SELECT users.id, users.phone, users.name
         FROM sessions
         INNER JOIN users ON users.id = sessions.user_id
         WHERE sessions.token = ? AND sessions.expires_at > NOW()
         LIMIT 1'
    );
    $stmt->execute([$token]);
    $user = $stmt->fetch();

    if (!$user) {
        json_response(['ok' => false, 'error' => 'invalid_token'], 401);
    }

    return $user;
}

function is_base_request(): bool
{
    $key = $_SERVER['HTTP_X_BASE_KEY'] ?? '';
    return hash_equals(BASE_API_KEY, $key);
}

function require_base(): void
{
    if (!is_base_request()) {
        json_response(['ok' => false, 'error' => 'base_forbidden'], 403);
    }
}

function random_token(): string
{
    return bin2hex(random_bytes(32));
}

apply_cors();
