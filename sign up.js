document.addEventListener("DOMContentLoaded", function() {
    var pwInput = document.getElementById("password");
    var pwToggle = document.querySelector(".toggle-pw");
    
    pwToggle.addEventListener("click", function () {
        var isHidden =pwInput.type === "password";
        pwInput.type = isHidden ? "text" : "password";
        pwToggle.setAttribute("aria-pressed", isHidden);
        pwToggle.classList.toggle("closed");

        const svg = pwToggle.querySelector("svg")
        if (isHidden) {
            svg.innerHTML = `
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/>
                <circle cx="12" cy="12" r="3"/>
                <line x1="2" y1="2" x2="22" y2="22"/>
            `;
        } else {
            svg.innerHTML = `
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/>
                <circle cx="12" cy="12" r="3"/>
            `;
        }
    });

        var confirmInput = document.getElementById("confirm");
        var confirmToggle = document.querySelector(".confirm-toggle");
    
        confirmToggle.addEventListener("click", function() {
            var isHidden = confirmInput.type ==="password";
            confirmInput.type = isHidden ? "text" : "password";
            confirmToggle.setAttribute("aria-pressed", isHidden);
            confirmToggle.classList.toggle("closed");

            const svg = confirmToggle.querySelector("svg");
            if (isHidden) {
                svg.innerHTML = `
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/>
                <circle cx="12" cy="12" r="3"/>
                <line x1="2" y1="2" x2="22" y2="22"/>
            `;
            } else {
                svg.innerHTML = `
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/>
                <circle cx="12" cy="12" r="3"/>
            `;
            }
        });
    
    document.querySelector(".btn-google").addEventListener("click", function() {
        window.location.href = "https://accounts.google.com/signin";
    });
    
    document.querySelector(".btn-facebook").addEventListener("click", function() {
        window.location.href = "https://www.facebook.com/login.php";
    });

 document.querySelector(".btn-apple").addEventListener("click", function() {
        window.location.href = "https://appleid.apple.com/sign-in";
    });

    var form = document.querySelector(".signup-form");
    
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var pwError = document.getElementById("password-error");
    var confirmError = document.getElementById("confirm-error");
    var alertBox = document.getElementById("form-alert");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        var valid = true;

        nameError.textContent ="";
        emailError.textContent ="";
        pwError.textContent = "";
        confirmError.textContent ="";
        alertBox.hidden = true;

        if (!nameInput.value.trim()) {
            nameError.textContent = "Full name is required."
            valid = false;
        }
       
        var emailValue = emailInput.value.trim();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValue) {
            emailError.textContent = "Email is required.";
            valid = false;
        } else if (!emailPattern.test(emailValue)) {
            emailError.textContent = "Enter a valid email address.";
            valid = false;
        }

        var pwValue = pwInput.value.trim();

        if (!pwValue) {
            pwError.textContent = "Password is required.";
            valid = false;
        } else if (pwValue.length < 6) {
            pwError.textContent = "Password must be at least 6 characters.";
            valid = false;
        }

        var confirmValue = confirmInput.value.trim();

        if (!confirmValue) {
            confirmError.textContent = "Please Confirm your password.";
            valid = false;
        } else if (confirmValue !== pwValue) {
            confirmError.textContent = "Passwords do not match.";
            valid = false;
        }

        if (!valid) return;

        alertBox.textContent = "Account created successfully!"
        alertBox.hidden = false;
 
       setTimeout(function() {
             window.location.href = "home 1.html";}, 1200);
    });

    });