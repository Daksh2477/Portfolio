/*==================================================
Portfolio V4
main.js
==================================================*/

/*=========================
PRELOADER
=========================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "0.6s";

    }

});

/*=========================
REVEAL ON SCROLL
=========================*/

const revealElements = document.querySelectorAll(".reveal");

function reveal() {

    const trigger = window.innerHeight - 100;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

/*=========================
ACTIVE NAVBAR LINK
=========================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================
MOBILE MENU
=========================*/

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuBtn.classList.toggle("open");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuBtn.classList.remove("open");

        });

    });

}

/*=========================
COUNTER
=========================*/

const counters = document.querySelectorAll(".counter");

const speed = 60;

function runCounters() {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        const update = () => {

            const current = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if (current < target) {

                counter.innerText = current + increment;

                setTimeout(update, 30);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

}

runCounters();

/*=========================
SCROLL PROGRESS BAR
=========================*/

const progress = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const scroll =

        (window.pageYOffset / totalHeight) * 100;

    if (progress) {

        progress.style.width = scroll + "%";

    }

});

/*=========================
CUSTOM CURSOR
=========================*/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    if (!cursor) return;

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

document.querySelectorAll("a, button").forEach(item => {

    item.addEventListener("mouseenter", () => {

        if (cursor) cursor.classList.add("grow");

    });

    item.addEventListener("mouseleave", () => {

        if (cursor) cursor.classList.remove("grow");

    });

});

/*=========================
SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*=========================
YEAR
=========================*/

const year = document.querySelector(".year");

if (year) {

    year.textContent = new Date().getFullYear();

}
