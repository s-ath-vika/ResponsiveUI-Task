document.addEventListener('DOMContentLoaded', () => {

    
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
            const usernameValue = usernameField.value.trim().toLowerCase();
            const alertBox = document.getElementById('usernameAjaxAlert');
            
            if (usernameValue === '') {
                alertBox.textContent = '';
                return;
            }

            alertBox.style.color = '#d4af37';
            alertBox.textContent = '🔍 Scanning registry architecture asynchronously...';

            // Simulating an asynchronous background Fetch operation targeting local state sets
            setTimeout(() => {
                const simulatedTakenRegistry = ['sathvika', 'admin', 'apexplanet', 'root'];
                if (simulatedTakenRegistry.includes(usernameValue)) {
                    alertBox.style.color = '#ff6b6b';
                    alertBox.textContent = '❌ Anomaly: Username already occupied in core database schema.';
                } else {
                    alertBox.style.color = '#2ecc71';
                    alertBox.textContent = '✅ Success: Username allocation space available.';
                }
            }, 800);
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
            const user = document.getElementById('loginUser').value.trim();
            const pass = document.getElementById('loginPassword').value.trim();

            if (user === '' || pass === '') {
                alert('Attention Required: All security verification handles must be populated.');
                return;
            }

            alert('Authentication Success! Connecting pipeline nodes to backend.');
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

            alert('Success! Registration frontend parameters successfully parsed.');
            registerForm.reset();
            if (matchAlertBox) matchAlertBox.textContent = '';
        });
    }
});