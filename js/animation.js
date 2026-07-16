/* ==========================================
   Portfolio 2026
   animation.js
========================================== */

const revealElements = document.querySelectorAll(
    ".section-title,.hero-left,.hero-right,.hero-stats,.glass,.image-card"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);