/*==================================================
Portfolio V4
scroll.js
==================================================*/

/*=========================
SCROLL PROGRESS
=========================*/

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =

        document.documentElement.scrollHeight -

        window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    if (progressBar) {

        progressBar.style.width = progress + "%";

    }

});

/*=========================
BACK TO TOP
=========================*/

const backToTop = document.createElement("button");

backToTop.innerHTML =

'<i class="fa-solid fa-arrow-up"></i>';

backToTop.className = "back-to-top";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================
SECTION REVEAL
=========================*/

const revealItems = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();