/* =========================================================
   ANNIE BESANT NATIONAL SCHOOL
   JAVASCRIPT
========================================================= */


/* ================= PRELOADER ================= */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    setTimeout(function () {
        preloader.classList.add("hide");
    }, 700);

});


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll(".nav-link").forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= NAVBAR SCROLL ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ================= ACTIVE NAV LINK ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNav);


/* ================= BACK TO TOP ================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= CURRENT YEAR ================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* ================= GALLERY LIGHTBOX ================= */

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

galleryItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const image = item.querySelector("img");

        if (!image) return;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("show");

        document.body.classList.add("no-scroll");

    });

});


/* ================= CLOSE LIGHTBOX ================= */

function closeLightbox() {

    lightbox.classList.remove("show");

    document.body.classList.remove("no-scroll");

    setTimeout(function () {
        lightboxImage.src = "";
    }, 300);

}


lightboxClose.addEventListener("click", closeLightbox);


/* Close when clicking outside image */

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


/* Close using ESC */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeLightbox();
    }

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".stat-card, .about-image-card, .about-content, .leader-card, .class-card, .why-item, .activity-card, .gallery-item, .contact-card"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(function (element) {
    revealObserver.observe(element);
});


/* ================= STAGGER ANIMATION ================= */

document.querySelectorAll(".class-card").forEach(function (card, index) {

    card.style.transitionDelay = (index * 0.05) + "s";

});


document.querySelectorAll(".leader-card").forEach(function (card, index) {

    card.style.transitionDelay = (index * 0.1) + "s";

});


document.querySelectorAll(".contact-card").forEach(function (card, index) {

    card.style.transitionDelay = (index * 0.08) + "s";

});


/* ================= IMAGE ERROR HANDLING ================= */

document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {

        image.style.background = "#eef2f7";
        image.style.minHeight = "200px";

    });

});


/* ================= SMOOTH ANCHOR SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener("click", function (event) {

        const targetId = anchor.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const offset = navbar.offsetHeight + 10;

        const position =
            target.getBoundingClientRect().top +
            window.scrollY -
            offset;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        });

    });

});


/* ================= BUTTON RIPPLE EFFECT ================= */

document.querySelectorAll(".btn, .nav-instagram, .instagram-button").forEach(function (button) {

    button.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        ripple.style.left = (event.clientX - rect.left) + "px";
        ripple.style.top = (event.clientY - rect.top) + "px";

        button.appendChild(ripple);

        setTimeout(function () {
            ripple.remove();
        }, 600);

    });

});


/* ================= CONSOLE ================= */

console.log(
    "%cAnnie Besant National School",
    "color:#123b72;font-size:20px;font-weight:bold;"
);

console.log(
    "%cLearn • Grow • Shine",
    "color:#d6a84f;font-size:13px;"
);