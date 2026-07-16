/*==================================================
Portfolio V4
counter.js
==================================================*/

/*=========================
COUNTER
=========================*/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

/*=========================
START COUNTERS
=========================*/

function startCounters() {

    if (counterStarted) return;

    const hero = document.querySelector(".hero");

    if (!hero) return;

    const heroTop = hero.getBoundingClientRect().top;

    if (heroTop > window.innerHeight) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        const duration = 2000;

        const frameRate = 1000 / 60;

        const totalFrames = Math.round(duration / frameRate);

        let frame = 0;

        const update = () => {

            frame++;

            const progress = frame / totalFrames;

            const current = Math.round(target * progress);

            counter.textContent = current;

            if (frame < totalFrames) {

                requestAnimationFrame(update);

            } else {

                counter.textContent = target;

            }

        };

        requestAnimationFrame(update);

    });

}

/*=========================
LISTENERS
=========================*/

window.addEventListener("scroll", startCounters);

window.addEventListener("load", startCounters);

/*=========================
RESET (OPTIONAL)
=========================*/

function resetCounters() {

    counters.forEach(counter => {

        counter.textContent = "0";

    });

    counterStarted = false;

}