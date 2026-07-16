/*==================================================
Portfolio V4
navbar.js
==================================================*/

/*=========================
ELEMENTS
=========================*/

const header = document.querySelector("header");

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

const navItems = document.querySelectorAll(".nav-links a");

/*=========================
HEADER SCROLL EFFECT
=========================*/

function navbarScroll(){

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", navbarScroll);

navbarScroll();

/*=========================
MOBILE MENU
=========================*/

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if(navLinks.classList.contains("active")){

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

            document.body.style.overflow="hidden";

        }else{

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

            document.body.style.overflow="";

        }

    });

}

/*=========================
CLOSE MENU
=========================*/

navItems.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        document.body.style.overflow="";

        const icon=menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});

/*=========================
ACTIVE LINK
=========================*/

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.offsetHeight;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/*=========================
SMOOTH SCROLL
=========================*/

navItems.forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const target=document.querySelector(

            link.getAttribute("href")

        );

        if(target){

            window.scrollTo({

                top:target.offsetTop-70,

                behavior:"smooth"

            });

        }

    });

});