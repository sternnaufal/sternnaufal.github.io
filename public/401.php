<?php
// 401.php
http_response_code(401); // Kirim status 401 ke browser
$home_url = 'index.php'; // Bisa diganti sesuai file beranda kamu
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>401 - Tidak Diizinkan</title>
    <link rel="stylesheet" href="style.css"> <!-- pakai style web kamu -->
    <style>
        body {
            background-color: #f5f5f5;
            font-family: Arial, sans-serif;
            text-align: center;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .error-container {
            max-width: 600px;
            margin: 100px auto;
            background: #fff;
            border: 2px solid #000;
            padding: 40px;
            box-shadow: 6px 6px 0 #000;
        }
        .error-code {
            font-size: 80px;
            font-weight: bold;
            color: red;
        }
        .error-message {
            font-size: 20px;
            margin: 10px 0;
        }
        a.button {
            display: inline-block;
            margin-top: 20px;
            background: #000;
            color: #fff;
            padding: 10px 20px;
            text-decoration: none;
            border: 2px solid #000;
            box-shadow: 3px 3px 0 #000;
            transition: all 0.2s ease;
        }
        a.button:hover {
            background: red;
            color: #fff;
        }
    </style>
</head>
<body>

<div class="error-container">
    <div class="error-code">401</div>
    <div class="error-message">Kredensial tidak valid. Anda tidak diizinkan untuk mengakses halaman ini.</div>
    <a href="<?= $home_url ?>" class="button">Kembali ke Beranda</a>
</div>

</body>
</html>
