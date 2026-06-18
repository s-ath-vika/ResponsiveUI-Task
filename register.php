<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cloud Registration Services | Signup</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="css/style.css?v=2.0">
</head>
<body>

    <?php include('navbar.php'); ?>

    <div class="container d-flex justify-content-center align-items-center flex-grow-1" style="margin-top: 110px; margin-bottom: 60px;">
        <div class="card bg-cocoa text-white border border-gold p-4 shadow animate-fade-in w-100" style="max-width: 550px; border-radius: 12px;">
            <div class="text-center mb-4">
                <i class="bi bi-person-plus text-gold display-5"></i>
                <h2 class="fw-bold text-gold mt-1">Profile Configuration</h2>
                <p class="text-champagne small">Establish validation records within the local ecosystem</p>
            </div>

            <form id="registerForm" novalidate>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="regName" class="form-label text-champagne small fw-medium">Full Identity Name</label>
                        <input type="text" class="form-control form-control-luxury" id="regName" required placeholder="Sathvika">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="regUsername" class="form-label text-champagne small fw-medium">Dynamic Username</label>
                        <input type="text" class="form-control form-control-luxury" id="regUsername" required placeholder="sathvika123">
                        <div id="usernameAjaxAlert" class="form-text small mt-1 fw-semibold"></div>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="regEmail" class="form-label text-champagne small fw-medium">Communication Routing Email</label>
                    <input type="email" class="form-control form-control-luxury" id="regEmail" required placeholder="sathvika@example.com">
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="regPassword" class="form-label text-champagne small fw-medium">Master Security Pass</label>
                        <div class="input-group">
                            <input type="password" class="form-control form-control-luxury" id="regPassword" required placeholder="••••••••">
                            <button class="btn btn-outline-gold togglePassword" type="button" data-target="regPassword">
                                <i class="bi bi-eye"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label for="regConfirmPassword" class="form-label text-champagne small fw-medium">Confirm Security Pass</label>
                        <div class="input-group">
                            <input type="password" class="form-control form-control-luxury" id="regConfirmPassword" required placeholder="••••••••">
                            <button class="btn btn-outline-gold togglePassword" type="button" data-target="regConfirmPassword">
                                <i class="bi bi-eye"></i>
                            </button>
                        </div>
                        <div id="passwordMatchAlert" class="form-text small mt-1 fw-semibold"></div>
                    </div>
                </div>

                <button type="submit" class="btn btn-gold w-100 py-2.5 mb-3">Register Profile Node</button>
                <div class="text-center">
                    <span class="text-champagne small">Already maintain an entry mapping? </span><a href="login.php" class="text-gold small text-decoration-none fw-semibold">Execute Login</a>
                </div>
            </form>
        </div>
    </div>

    <?php include('footer.php'); ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/auth_validation.js"></script>
</body>
</html>