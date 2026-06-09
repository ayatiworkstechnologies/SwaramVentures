<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
    exit;
}

$payload = file_get_contents('php://input');

$ch = curl_init('https://api.ayatiworks.com/api/v1/public/swaram/contact_us/records');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'X-API-Key: f9aa5f465f379ef93965df658e73519242df416571fdf943491f0185a91ce9b0',
    ],
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_TIMEOUT => 30,
]);

$response = curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

if ($response === false) {
    http_response_code(500);
    echo json_encode(['message' => 'Unable to submit form', 'error' => $error]);
    exit;
}

http_response_code($status ?: 500);
echo $response;
