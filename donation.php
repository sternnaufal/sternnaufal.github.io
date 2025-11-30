<?php
// donation.php
$page_title = "Donasi - Naufal Rakha Putra";
$saweria_link = "https://saweria.co/naufalrakha";
$widgets = [
    "Running Text" => "https://saweria.co/widgets/recent?streamKey=2e66e738ef922ef2cf6fb3501d296560",
    "Leaderboard" => "https://saweria.co/widgets/leaderboard?streamKey=2e66e738ef922ef2cf6fb3501d296560",
    "Milestone" => "https://saweria.co/widgets/milestone?streamKey=2e66e738ef922ef2cf6fb3501d296560",
    "QR Code" => "https://saweria.co/widgets/qr?streamKey=2e66e738ef922ef2cf6fb3501d296560"
];
?>
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?= $page_title ?></title>
<link rel="stylesheet" href="style.css">
<style>
body { font-family: Arial, sans-serif; background: #f5f5f5; margin:0; text-align:center; color:#333; }
header { background:#000; color:#fff; padding:20px 0; }
main { padding:40px 20px; }
h1 { margin-bottom:20px; }
p { margin-bottom:30px; font-size:18px; }
.section { max-width:500px; margin:20px auto; padding:20px; background:#fff; border:2px solid #000; box-shadow:4px 4px 0 #000; border-radius:8px; }
.section a { display:inline-block; margin-top:15px; background:#000; color:#fff; padding:10px 20px; text-decoration:none; border:2px solid #000; box-shadow:3px 3px 0 #000; transition:0.2s ease; }
.section a:hover { background:red; color:#fff; }
.section img { max-width:150px; margin:10px 0; }
</style>
</head>
<body>
<header>
    <h1><?= $page_title ?></h1>
</header>
<main>
    <p>Terima kasih telah mendukung saya! Klik tombol di bawah untuk melihat donasi atau berdonasi langsung.</p>

    <!-- Donasi Langsung -->
    <div class="section">
        <h2>Donasi Sekarang</h2>
        <img src="https://cdn.saweria.co/assets/images/brand/saweria-logo.png" alt="Saweria Logo">
        <a href="<?= $saweria_link ?>" target="_blank">Donasi Sekarang</a>
    </div>

    <!-- Widget Saweria -->
    <?php foreach($widgets as $name => $link): ?>
        <div class="section">
            <h2><?= $name ?></h2>
            <p>Klik tombol untuk melihat <?= strtolower($name) ?> di Saweria.</p>
            <a href="<?= $link ?>" target="_blank">Lihat <?= $name ?></a>
        </div>
    <?php endforeach; ?>
</main>
</body>
</html>
