<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
    var pwInput = document.getElementById("password");
    var toggleBtn = document.querySelector(".toggle-pw");
    
    toggleBtn.addEventListener("click", function () {
        var isHidden =pwInput.type === "password";
        pwInput.type = isHidden ? "text" : "password";
        toggleBtn.setAttribute("aria-pressed", isHidden);
        toggleBtn.classList.toggle("closed");

        const svg = toggleBtn.querySelector("svg");
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

    var form = document.querySelector(".login-form");
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("email-error");
    var pwError = document.getElementById("password-error");
    var alertBox = document.getElementById("form-alert");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        var valid = true;

        emailError.textContent ="";
        pwError.textContent = "";
        alertBox.hidden = true;


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

        if (!valid) return;

        alertBox.textContent = "Success! Logging you in."
        alertBox.hidden = false;

        setTimeout(function() {
             window.location.href = "home 1.html";}, 1200);
    });

=======
document.addEventListener("DOMContentLoaded", function() {
    var pwInput = document.getElementById("password");
    var toggleBtn = document.querySelector(".toggle-pw");
    
    toggleBtn.addEventListener("click", function () {
        var isHidden =pwInput.type === "password";
        pwInput.type = isHidden ? "text" : "password";
        toggleBtn.setAttribute("aria-pressed", isHidden);
        toggleBtn.classList.toggle("closed");
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

    var form = document.querySelector(".login-form");
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("email-error");
    var pwError = document.getElementById("password-error");
    var alertBox = document.getElementById("form-alert");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        var valid = true;

        emailError.textContent ="";
        pwError.textContent = "";
        alertBox.hidden = true;


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

        if (!valid) return;

        alertBox.textContent = "Success! Logging you in."
        alertBox.hidden = false;

        setTimeout(function() {
             window.location.href = "home 1.html";}, 1200);
    });

>>>>>>> c70f85ff346742d4819442705d3f57b6aa6fa44f
    });