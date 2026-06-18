<?php
// Establish immediate local database connection framework
$host = "localhost";
$username = "root";
$password = ""; 
$database = "portfolio_db";

$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    die("Database link failed: " . mysqli_connect_error());
}

// Intercept the check request sent via JavaScript GET stream parameters
if (isset($_GET['username'])) {
    $userToCheck = trim($_GET['username']);
    
    // Use an injection-safe prepared statement structure
    $query = "SELECT id FROM users WHERE username = ? LIMIT 1";
    $stmt = mysqli_prepare($conn, $query);
    
    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "s", $userToCheck);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_store_result($stmt);
        
        // If row tracking returns greater than 0, the username is taken
        if (mysqli_stmt_num_rows($stmt) > 0) {
            echo "taken";
        } else {
            echo "available";
        }
        
        mysqli_stmt_close($stmt);
    }
}

mysqli_close($conn);
?>