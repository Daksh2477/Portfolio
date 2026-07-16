/*==================================================
Portfolio V4
theme.js
==================================================*/

const themeBtn = document.querySelector(".theme-btn");

const body = document.body;

const icon = document.querySelector(".theme-btn i");

/*=========================
LOAD SAVED THEME
=========================*/

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    body.classList.add("light");

    if (icon) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    }

} else {

    body.classList.remove("light");

    if (icon) {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

}

/*=========================
TOGGLE THEME
=========================*/

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        body.classList.toggle("light");

        if (body.classList.contains("light")) {

            localStorage.setItem("theme", "light");

            if (icon) {

                icon.classList.remove("fa-moon");

                icon.classList.add("fa-sun");

            }

        } else {

            localStorage.setItem("theme", "dark");

            if (icon) {

                icon.classList.remove("fa-sun");

                icon.classList.add("fa-moon");

            }

        }

    });

}