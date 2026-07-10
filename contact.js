document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form");
    const alertBox = document.getElementById("contact-alert");

    const fields = {
        cname: document.getElementById("cname"),
        cemail: document.getElementById("cemail"),
        csubject: document.getElementById("csubject"),
        cmessage: document.getElementById("cmessage")
    };

    const errors = {
        cname: document.getElementById("cname-error"),
        cemail: document.getElementById("cemail-error"),
        csubject: document.getElementById("csubject-error"),
        cmessage: document.getElementById("cmessage-error")
    };

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let valid = true;

        if (fields.cname.value.trim() === "") {
            errors.cname.textContent = "Please enter your name.";
            valid = false;
        } else {
            errors.cname.textContent = "";
        }

        if (!validateEmail(fields.cemail.value.trim())) {
            errors.cemail.textContent = "Please enter a valid email.";
            valid = false;
        } else {
            errors.cemail.textContent = "";
        }

        if (fields.csubject.value.trim() === "") {
            errors.csubject.textContent = "Please enter a subject.";
            valid = false;
        } else {
            errors.csubject.textContent = "";
        }

        if (fields.cmessage.value.trim() === "") {
            errors.cmessage.textContent = "Please enter a message.";
            valid = false;
        } else {
            errors.cmessage.textContent = "";
        }

        if (valid) {
            alertBox.hidden = false;
            alertBox.style.color = "#4CAF50";
            alertBox.textContent = "Your message has been sent!";

            form.reset();

            setTimeout(function() {
                alertBox.hidden = true;}, 3000);
        }
    })
})