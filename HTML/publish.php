<?php
$data = json_decode(file_get_contents('php://input'), true);
$filename = $data['filename'];
$content = $data['content'];

$directory = 'D:/Mybbs/source/涉河/';
if (!is_dir($directory)) {
    mkdir($directory, 0777, true);
}

file_put_contents($directory . $filename, $content);

echo json_encode(['status' => 'success', 'filename' => $filename]);
?>
