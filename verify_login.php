<?php
$host = "localhost";
$username = "root";
$password = ""; 
$database = "portfolio_db";

$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    die("Database link failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userInput = trim($_POST['username']);
    $passInput = trim($_POST['password']);

    if (empty($userInput) || empty($passInput)) {
        echo "empty_fields";
        exit;
    }
    $query = "SELECT password FROM users WHERE username = ? OR email = ? LIMIT 1";
    $stmt = mysqli_prepare($conn, $query);

    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "ss", $userInput, $userInput);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_bind_result($stmt, $fetchedPassword);
        
        if (mysqli_stmt_fetch($stmt)) {
            if ($passInput === $fetchedPassword) {
                echo "auth_success";
            } else {
                echo "wrong_password";
            }
        } else {
            echo "user_not_found";
        }
        mysqli_stmt_close($stmt);
    }
}

mysqli_close($conn);
?>