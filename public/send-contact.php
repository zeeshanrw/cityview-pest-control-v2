<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, string $message): void {
    http_response_code($status);
    echo json_encode(['ok' => $status < 400, 'message' => $message]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, 'Method not allowed.');
}

// A hidden honeypot catches simple form bots without affecting visitors.
if (trim((string)($_POST['website'] ?? '')) !== '') {
    respond(200, 'Request received.');
}

$name = trim((string)($_POST['name'] ?? ''));
$phone = trim((string)($_POST['phone'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$city = trim((string)($_POST['city'] ?? ''));
$details = trim((string)($_POST['message'] ?? ''));
$requestType = ($_POST['requestType'] ?? '') === 'callback' ? 'callback' : 'quote';
$serviceSlugs = is_array($_POST['services'] ?? null) ? $_POST['services'] : [];

if ($name === '' || mb_strlen($name) > 100 || !preg_match('/^[+0-9() .-]{7,30}$/', $phone)) {
    respond(422, 'Please check your name and phone number.');
}
if ($email !== '' && (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254)) {
    respond(422, 'Please check your email address.');
}
if ($requestType === 'quote' && ($email === '' || $city === '' || mb_strlen($city) > 100)) {
    respond(422, 'Please complete the required fields.');
}
if (mb_strlen($details) > 1500) {
    respond(422, 'The message is too long.');
}

$serviceNames = [
    'wasps-hornets' => 'Wasps & Hornets', 'ants' => 'Ants',
    'cockroaches' => 'Cockroaches', 'spiders' => 'Spiders',
    'mosquitoes' => 'Mosquitoes', 'termites' => 'Termites',
    'bed-bugs' => 'Bed Bugs', 'rodents' => 'Rodents', 'flies' => 'Flies',
    'fleas-ticks' => 'Fleas & Ticks', 'silverfish' => 'Silverfish',
    'squirrel-removal' => 'Squirrel Removal', 'raccoon-removal' => 'Raccoon Removal',
    'bat-removal' => 'Bat Removal', 'skunk-removal' => 'Skunk Removal',
    'bird-removal' => 'Bird Removal', 'opossum-removal' => 'Opossum Removal',
];
$services = [];
foreach (array_slice($serviceSlugs, 0, count($serviceNames)) as $slug) {
    if (is_string($slug) && isset($serviceNames[$slug])) {
        $services[] = $serviceNames[$slug];
    }
}

$clean = static function (string $value): string {
    return str_replace(["\r", "\0"], '', $value);
};
$subject = $requestType === 'callback' ? 'Website callback request' : 'Website free quote request';
$lines = [
    $subject,
    'From the Cityview Pest Control website',
    '',
    'Name: ' . $clean($name),
    'Phone: ' . $clean($phone),
];
if ($email !== '') $lines[] = 'Email: ' . $clean($email);
if ($city !== '') $lines[] = 'City: ' . $clean($city);
if ($services !== []) $lines[] = 'Services: ' . implode(', ', $services);
if ($details !== '') $lines[] = "\nDetails:\n" . $clean($details);

$headers = [
    'From: Cityview Website <info@cityviewpestcontrol.ca>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . PHP_VERSION,
];
if ($email !== '') $headers[] = 'Reply-To: ' . $email;

$sent = mail(
    'info@cityviewpestcontrol.ca',
    $subject,
    implode("\n", $lines),
    implode("\r\n", $headers),
    '-finfo@cityviewpestcontrol.ca'
);

if (!$sent) respond(500, 'The message could not be sent.');
respond(200, 'Request sent.');
