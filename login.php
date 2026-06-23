<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secure Gateway Access | Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="css/style.css?v=2.0">
</head>
<body>

    <?php include('navbar.php'); ?>

    <div class="container d-flex justify-content-center align-items-center flex-grow-1" style="margin-top: 100px; margin-bottom: 50px;">
        <div class="card bg-cocoa text-white border border-gold p-4 shadow animate-fade-in w-100" style="max-width: 450px; border-radius: 12px;">
            <div class="text-center mb-4">
                <i class="bi bi-shield-lock text-gold display-5"></i>
                <h2 class="fw-bold text-gold mt-2">Sign In</h2>
                <p class="text-champagne small">Provide credentials to authenticate credentials</p>
            </div>

            <form id="loginForm" novalidate>
                <div class="mb-3">
                    <label for="loginUser" class="form-label text-champagne small fw-medium">Username or Email Address</label>
                    <input type="text" class="form-type form-control form-control-luxury" id="loginUser" required placeholder="name@domain.com">
                </div>

                <div class="mb-4">
                    <label for="loginPassword" class="form-label text-champagne small fw-medium">Secure Security Pin</label>
                    <div class="input-group">
                        <input type="password" class="form-control form-control-luxury" id="loginPassword" required placeholder="••••••••">
                        <button class="btn btn-outline-gold togglePassword" type="button" data-target="loginPassword">
                            <i class="bi bi-eye"></i>
                        </button>
                    </div>
                </div>

                <button type="submit" class="btn btn-gold w-100 py-2.5 mb-3">Execute Authentication</button>
                <div class="text-center">
                    <span class="text-champagne small">Missing an active account configuration? </span><a href="register.php" class="text-gold small text-decoration-none fw-semibold">Register Profile</a>
                </div>
            </form>
        </div>
    </div>

    <?php include('footer.php'); ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/auth_validation.js?v=2.1"></script>
</body>
</html>