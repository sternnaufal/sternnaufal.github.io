<?php
$allowed_ref = 'https://naufalrakha.my.id';
$referer = $_SERVER['HTTP_REFERER'] ?? '';

if (strpos($referer, $allowed_ref) === false) {
    header("HTTP/1.1 403 Forbidden");
    exit("Access denied");
}

header("Content-Type: image/png");
readfile('ku.png');
?>