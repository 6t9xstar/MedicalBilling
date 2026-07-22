<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed',
    ]);
    exit;
}

function respond(int $status, array $payload): void {
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput ?: '', true);

if (!is_array($data)) {
    respond(400, [
        'success' => false,
        'message' => 'Invalid request payload',
    ]);
}

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$phone = trim((string)($data['phone'] ?? ''));
$company = trim((string)($data['company'] ?? ''));
$service = trim((string)($data['service'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$website = trim((string)($data['website'] ?? ''));

if ($website !== '') {
    respond(200, [
        'success' => true,
        'message' => 'Message sent',
    ]);
}

if ($name === '' || $email === '' || $message === '') {
    respond(400, [
        'success' => false,
        'message' => 'Name, email, and message are required',
    ]);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, [
        'success' => false,
        'message' => 'Please enter a valid email address',
    ]);
}

$cleanName = preg_replace('/[\r\n]+/', ' ', $name) ?: $name;
$cleanEmail = filter_var($email, FILTER_SANITIZE_EMAIL) ?: $email;
$cleanPhone = preg_replace('/[^0-9+()\-\s]/', '', $phone) ?: $phone;
$cleanCompany = preg_replace('/[\r\n]+/', ' ', $company) ?: $company;
$cleanService = preg_replace('/[\r\n]+/', ' ', $service) ?: $service;

$to = getenv('CONTACT_TO_EMAIL') ?: 'form@apexprecisionbilling.com';
$from = getenv('CONTACT_FROM_EMAIL') ?: 'form@apexprecisionbilling.com';
$siteUrl = getenv('CONTACT_SITE_URL') ?: 'https://apexprecisionbilling.com';

$subject = 'Website Contact: ' . ($cleanService !== '' ? $cleanService : 'General Inquiry') . ' from ' . $cleanName;

$bodyLines = [
    'New website inquiry from Apex Precision Billing',
    '',
    'Name: ' . $cleanName,
    'Email: ' . $cleanEmail,
    'Phone: ' . ($cleanPhone !== '' ? $cleanPhone : 'Not provided'),
    'Company / Practice: ' . ($cleanCompany !== '' ? $cleanCompany : 'Not provided'),
    'Topic: ' . ($cleanService !== '' ? $cleanService : 'General Inquiry'),
    '',
    'Message:',
    $message,
    '',
    'Submitted from: ' . $siteUrl,
    'IP Address: ' . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown'),
    'User Agent: ' . ($_SERVER['HTTP_USER_AGENT'] ?? 'Unknown'),
];

$body = implode("\n", $bodyLines);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Apex Precision Billing <' . $from . '>',
    'Reply-To: ' . $cleanEmail,
    'X-Mailer: PHP/' . phpversion(),
];

$mailSent = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));

if (!$mailSent) {
    respond(500, [
        'success' => false,
        'message' => 'Failed to send message. Please try again later.',
    ]);
}

$confirmationSubject = 'Thank you for contacting Apex Precision Billing';
$confirmationBody = implode("\n", [
    'Hi ' . $cleanName . ',',
    '',
    'Thank you for reaching out to Apex Precision Billing.',
    '',
    'We have received your inquiry' . ($cleanService !== '' ? ' regarding ' . $cleanService : '') . ' and will review it promptly. A member of our team will respond using the contact details you provided.',
    '',
    'If your matter is urgent, please email info@apexprecisionbilling.com or visit ' . $siteUrl . '.',
    '',
    'Best regards,',
    'Apex Precision Billing',
]);

$confirmationHeaders = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Apex Precision Billing <' . $from . '>',
    'Reply-To: ' . $to,
    'X-Mailer: PHP/' . phpversion(),
];

@mail(
    $cleanEmail,
    '=?UTF-8?B?' . base64_encode($confirmationSubject) . '?=',
    $confirmationBody,
    implode("\r\n", $confirmationHeaders)
);

respond(200, [
    'success' => true,
    'message' => 'Message sent',
]);
