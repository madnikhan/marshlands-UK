<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

function field(string $key): string
{
    $value = $_POST[$key] ?? '';
    if (is_array($value)) {
        return '';
    }
    return trim(strip_tags((string) $value));
}

function respond(bool $success, string $message, int $status = 200): void
{
    http_response_code($status);
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

// Honeypot — bots fill this; humans never see it
if (field('botcheck') !== '') {
    respond(true, 'Thank you.');
}

$formType = field('form_type');
if (!in_array($formType, ['contact', 'partner'], true)) {
    respond(false, 'Invalid form type.', 400);
}

$email = field('email');
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'A valid email address is required.', 400);
}

$message = field('message');
if ($message === '') {
    respond(false, 'Message is required.', 400);
}

$to = 'info@marshlands.co.uk';
$fromAddress = 'info@marshlands.co.uk';
$lines = [];

if ($formType === 'contact') {
    $company = field('company');
    $topic = field('topic');
    $partnershipType = field('partnership_type');
    $whatsapp = field('whatsapp');
    $website = field('website');

    if ($company === '' || $website === '' || $topic === '' || $partnershipType === '') {
        respond(false, 'Please fill in all required fields.', 400);
    }

    $subject = 'MARSHLAND website contact: ' . $topic;
    $lines[] = 'Form: Contact';
    $lines[] = 'Company: ' . $company;
    $lines[] = 'Business email: ' . $email;
    $lines[] = 'WhatsApp: ' . ($whatsapp !== '' ? $whatsapp : '—');
    $lines[] = 'Website: ' . ($website !== '' ? $website : '—');
    $lines[] = 'Partnership type: ' . $partnershipType;
    $lines[] = 'Main product categories: ' . $topic;
    $lines[] = '';
    $lines[] = 'Message:';
    $lines[] = $message;
} else {
    $company = field('company');
    $country = field('country');
    $name = field('name');
    $partnershipType = field('partnership_type');

    if ($company === '' || $country === '' || $name === '' || $partnershipType === '') {
        respond(false, 'Please fill in all required fields.', 400);
    }

    $subject = 'MARSHLAND partnership enquiry: ' . $company;
    $lines[] = 'Form: Partner';
    $lines[] = 'Company: ' . $company;
    $lines[] = 'Country: ' . $country;
    $lines[] = 'Contact name: ' . $name;
    $lines[] = 'Email: ' . $email;
    $lines[] = 'Partnership type: ' . $partnershipType;
    $lines[] = '';
    $lines[] = 'Message:';
    $lines[] = $message;
}

$body = implode("\n", $lines);
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'From: MARSHLAND Website <' . $fromAddress . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($to, $encodedSubject, $body, implode("\r\n", $headers));

if (!$sent) {
    respond(false, 'Unable to send message. Please email info@marshlands.co.uk directly.', 500);
}

respond(true, 'Thank you. Your message has been sent.');
