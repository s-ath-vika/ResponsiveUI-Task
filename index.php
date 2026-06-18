<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Portal | Task 2 UI</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="css/style.css?v=2.0">
</head>
<body>

    <?php include('navbar.php'); ?>

    <main class="container" style="margin-top: 120px;">
        <div class="row align-items-center justify-content-center min-vh-75 text-center py-5 animate-fade-in">
            <div class="col-lg-8">
                <h1 class="text-gold display-4 fw-bold mb-3" style="font-family: 'Cinzel', serif;">
                    Artificial Intelligence & Machine Learning
                </h1>
                <p class="text-champagne lead mb-5 max-width-600 mx-auto">
                    Specializing in predictive data architecture, threat intelligence, and responsive full-stack platform setups. Welcome to the Task 2 Authentication Portal Interface.
                </p>
                <div class="d-flex flex-column flex-sm-row justify-content-center gap-3">
                    <a href="login.php" class="btn btn-gold btn-lg px-5 py-3">Access Account Portal</a>
                    <a href="register.php" class="btn btn-outline-gold btn-lg px-5 py-3">Register New Profile</a>
                </div>
            </div>
        </div>
    </main>

    <?php include('footer.php'); ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/auth_validation.js"></script>
</body>
</html>