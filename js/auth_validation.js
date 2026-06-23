document.addEventListener('DOMContentLoaded', () => {

    
    const cursorParticles = [];
    const particleColors = ['#d4af37', '#f0e6d2', '#aa8414']; 

    window.addEventListener('mousemove', (e) => {
        if (Math.random() < 0.25) { 
            createParticle(e.clientX, e.clientY);
        }
    });

    function createParticle(x, y) {
        const particle = document.createElement('div');
        const isStar = Math.random() > 0.5;

        particle.style.position = 'fixed';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '99999';
        particle.style.color = particleColors[Math.floor(Math.random() * particleColors.length)];
        particle.style.fontSize = isStar ? `${Math.random() * 14 + 10}px` : `${Math.random() * 6 + 4}px`;
        particle.style.fontFamily = 'serif';
        particle.innerHTML = isStar ? '★' : '•';
        particle.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';
        particle.style.transform = 'translate(-50%, -50%) scale(1)';

        document.body.appendChild(particle);

        const velocityX = (Math.random() - 0.5) * 3;
        const velocityY = (Math.random() - 0.5) * 3 + 1; 

        let currentX = x;
        let currentY = y;
        let opacity = 1;
        let scale = 1;

        const animateLoop = setInterval(() => {
            currentX += velocityX;
            currentY += velocityY;
            opacity -= 0.04;
            scale -= 0.03;

            if (opacity <= 0 || scale <= 0) {
                clearInterval(animateLoop);
                particle.remove();
            } else {
                particle.style.left = `${currentX}px`;
                particle.style.top = `${currentY}px`;
                particle.style.opacity = opacity;
                particle.style.transform = `translate(-50%, -50%) scale(${scale})`;
            }
        }, 30);
    }

    
    const toggleButtons = document.querySelectorAll('.togglePassword');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetInput = document.getElementById(targetId);
            const icon = this.querySelector('i');

            if (targetInput.type === 'password') {
                targetInput.type = 'text';
                icon.classList.replace('bi-eye', 'bi-eye-slash');
            } else {
                targetInput.type = 'password';
                icon.classList.replace('bi-eye-slash', 'bi-eye');
            }
        });
    });

    const usernameField = document.getElementById('regUsername');
    if (usernameField) {
        usernameField.addEventListener('blur', () => {
            const usernameValue = usernameField.value.trim();
            const alertBox = document.getElementById('usernameAjaxAlert');
            
            if (usernameValue === '') {
                alertBox.textContent = '';
                return;
            }
            alertBox.style.color = '#d4af37'; // Gold
            alertBox.textContent = '🔍 Querying database architecture via AJAX...';

            fetch(`check_user.php?username=${encodeURIComponent(usernameValue)}`)
                .then(response => response.text())
                .then(data => {
                    if (data.trim() === "taken") {
                        alertBox.style.color = '#ff6b6b'; // Light crimson alert
                        alertBox.textContent = '❌ Anomaly: Username already occupied in core MySQL schema.';
                    } else if (data.trim() === "available") {
                        alertBox.style.color = '#2ecc71'; // Soft emerald success
                        alertBox.textContent = '✅ Success: Username allocation space available.';
                    } else {
                        alertBox.style.color = '#ff6b6b';
                        alertBox.textContent = '⚠️ Backend message reported: ' + data;
                    }
                })
                .catch(error => {
                    console.error('AJAX Fetch failure operation mapping:', error);
                    alertBox.textContent = '⚠️ Failed to connect to server backend registry.';
                });
        });
    }

    
    const passInput = document.getElementById('regPassword');
    const confirmPassInput = document.getElementById('regConfirmPassword');
    const matchAlertBox = document.getElementById('passwordMatchAlert');

    function executePasswordVerificationMatch() {
        if (!passInput || !confirmPassInput) return;
        
        const p1 = passInput.value;
        const p2 = confirmPassInput.value;

        if (p2 === '') {
            matchAlertBox.textContent = '';
            return;
        }

        if (p1 === p2) {
            matchAlertBox.style.color = '#2ecc71';
            matchAlertBox.textContent = '✅ Security structure matrices match.';
        } else {
            matchAlertBox.style.color = '#ff6b6b';
            matchAlertBox.textContent = '❌ Discrepancy: Security keys do not align.';
        }
    }

    if (passInput && confirmPassInput) {
        passInput.addEventListener('input', executePasswordVerificationMatch);
        confirmPassInput.addEventListener('input', executePasswordVerificationMatch);
    }


    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const userVal = document.getElementById('loginUser').value.trim();
            const passVal = document.getElementById('loginPassword').value.trim();

            if (userVal === '' || passVal === '') {
                alert('Attention Required: All security verification handles must be populated.');
                return;
            }

            console.log(`[AJAX Dispatch]: Requesting verification for User: "${userVal}"`);

            fetch('verify_login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'username': userVal,
                    'password': passVal
                })
            })
            .then(response => response.text())
            .then(statusText => {
                const status = statusText.trim();
                console.log(`[Database Server Response]: "${status}"`);
                
                if (status === "auth_success") {
                    alert('✨ Authentication Success! Verified successfully via local MySQL database. Access granted.');
                    loginForm.reset();
                } else if (status === "wrong_password") {
                    alert('❌ Authentication Failure: Password discrepancy detected. Access denied.');
                } else if (status === "user_not_found") {
                    alert('❌ Authentication Failure: Account credential mapping not found within active database schema.');
                } else {
                    alert('⚠️ Backend anomaly reported: ' + status);
                }
            })
            .catch(error => {
                console.error('Login AJAX execution framework anomaly:', error);
                alert('⚠️ Failed to communicate securely with authentication server backend.');
            });
        });
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const n = document.getElementById('regName').value.trim();
            const u = document.getElementById('regUsername').value.trim();
            const eMail = document.getElementById('regEmail').value.trim();
            const p1 = passInput.value;
            const p2 = confirmPassInput.value;

            if ([n, u, eMail, p1, p2].some(input => input === '')) {
                alert('Validation Alert: Profile data fields cannot consist of empty parameters.');
                return;
            }

            if (p1 !== p2) {
                alert('Configuration Failure: Form submission rejected due to password tracking layout discrepancies.');
                return;
            }

            alert('Success! Registration frontend parameters successfully verified.');
            registerForm.reset();
            if (matchAlertBox) matchAlertBox.textContent = '';
        });
    }
});