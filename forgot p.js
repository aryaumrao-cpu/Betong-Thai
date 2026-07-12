document.addEventListener("DOMContentLoaded", function() {
    
    const newPwInput = document.getElementById("new-password");
    const newPwToggle = document.querySelector(".new-toggle");

    newPwToggle.addEventListener("click", function() {
        const isHidden = newPwInput.type === "password";
        newPwInput.type = isHidden ? "text" : "password";
        newPwToggle.setAttribute("aria-pressed", isHidden);
        newPwToggle.classList.toggle("closed");

        const svg = newPwToggle.querySelector("svg");
        svg.innerHTML = isHidden
            ? `<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/><circle cx="12" cy="12" r="3"/><line x1="2" y1="2" x2="22" y2="22"/>`
            : `<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/><circle cx="12" cy="12" r="3"/>`;
    });

        const confirmInput = document.getElementById("reenter-password");
        const confirmToggle = document.querySelector(".confirm-toggle");

        confirmToggle.addEventListener("click", function() {
            const isHidden = confirmInput.type === "password";
            confirmInput.type = isHidden ? "text" : "password";
            confirmToggle.setAttribute("aria-pressed", isHidden);
            confirmToggle.classList.toggle("closed");

            const svg = confirmToggle.querySelector("svg");
            svg.innerHTML = isHidden
                ? `<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/><circle cx="12" cy="12" r="3"/><line x1="2" y1="2" x2="22" y2="22"/>`
                : `<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/><circle cx="12" cy="12" r="3"/>`;
    });
    
            const form = document.querySelector(".reset-form");
            const newPwError = document.getElementById("new-password-error");
            const confirmError = document.getElementById("reenter-password-error");
            const alertBox = document.getElementById("form-alert");

            form.addEventListener("submit", function(e) {
                e.preventDefault();

                let valid = true;

                newPwError.textContent = "";
                confirmError.textContent = "";
                alertBox.hidden = true;

                const pwValue = newPwInput.value.trim();
                const confirmValue = confirmInput.value.trim();

                if (!pwValue) {
                    newPwError.textContent = "New password is required.";
                    valid = false;
                } else if (pwValue.length < 6) {
                    newPwError.textContent = "Password must be at least 6 characters.";
                    valid = false;
                }

                if (!confirmValue) {
                    confirmError.textContent = "Please re-enter your password.";
                    valid = false;
                } else if (confirmValue !== pwValue) {
                    confirmError.textContent = "Passwords do not match.";
                    valid = false;
                }

                if (!valid) return;

                alertBox.textContent = "Password reset successfully!";
                alertBox.hidden = false;

                setTimeout(() => {
                    window.location.href = "login.html";}, 1200);
            });
    }); 