/*==================================================
Portfolio V4
loader.js
==================================================*/

const loader = document.querySelector(".loader");

/*=========================
WINDOW LOAD
=========================*/

window.addEventListener("load", () => {

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.pointerEvents = "none";

    }, 1200);

});

/*=========================
PAGE TRANSITION
=========================*/

window.addEventListener("beforeunload", () => {

    if (!loader) return;

    loader.style.opacity = "1";
    loader.style.visibility = "visible";

});

/*=========================
PREVENT SCROLL
=========================*/

document.documentElement.style.scrollBehavior = "smooth";