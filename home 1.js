let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(function(slide) {
        slide.style.display = "none";
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

const REVIEWS = [
    {
        text: "Betong Thai is hands down the best Thai food in Macquarie Fields. The green curry tastes exactly like homemade — rich, fragrant, and never overly sweet like most places. This is our go-to every Friday night.",
        name: "SARAH NGUYEN",
        title: "REGULAR CUSTOMER" 
    },

    {
        text: "The Tom Yum Gong here is unbeatable. Perfectly balanced, generous with prawns, and the service is always warm and friendly. Highly recommend for anyone craving authentic Thai flavour.",
        name: "DAVID CHEN",
        title: "LOCAL FOODIE" 
    },

    {
        text: "We ordered catering for a family event and every dish was a hit. Fresh, flavourful, and beautifully presented. Betong Thai made our celebration even better.",
        name: "PRIYA SHARMA",
        title: "CATERING CLIENT"
    }
];

let currentReview = 0;

function renderReview() {
    const r = REVIEWS[currentReview];
    document.getElementById('reviewText').textContent = r.text;
    document.getElementById('reviewerName').textContent = r.name;
    document.getElementById('reviewerTitle').textContent = r.title;
}

function changeReview(dir) {
    currentReview = (currentReview + dir + REVIEWS.length) % REVIEWS.length;
    renderReview();
}

document.addEventListener('DOMContentLoaded', renderReview);


