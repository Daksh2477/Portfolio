/*==================================================
Portfolio V4
particles.js
==================================================*/

/*=========================
BACKGROUND PARTICLES
=========================*/

const background = document.querySelector(".background");

if (background) {

    for (let i = 0; i < 25; i++) {

        const particle = document.createElement("span");

        particle.className = "particle";

        particle.style.left = Math.random() * 100 + "%";

        particle.style.top = Math.random() * 100 + "%";

        particle.style.width = (4 + Math.random() * 8) + "px";

        particle.style.height = particle.style.width;

        particle.style.animationDuration =
            (8 + Math.random() * 12) + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        background.appendChild(particle);

    }

}

/*=========================
MOUSE PARALLAX
=========================*/

document.addEventListener("mousemove", (e) => {

    const particles = document.querySelectorAll(".particle");

    particles.forEach((particle, index) => {

        const speed = (index % 5 + 1) * 0.2;

        const x = (window.innerWidth / 2 - e.clientX) * speed / 100;

        const y = (window.innerHeight / 2 - e.clientY) * speed / 100;

        particle.style.transform =
            `translate(${x}px, ${y}px)`;

    });

});