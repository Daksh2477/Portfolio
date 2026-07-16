/*==================================================
Portfolio V4
cursor.js
==================================================*/

/*=========================
ELEMENTS
=========================*/

const cursor = document.querySelector(".cursor");
const spotlight = document.querySelector(".spotlight");

/*=========================
CURSOR MOVE
=========================*/

document.addEventListener("mousemove",(e)=>{

if(cursor){

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

}

if(spotlight){

spotlight.style.left=e.clientX+"px";

spotlight.style.top=e.clientY+"px";

}

});

/*=========================
CURSOR HOVER
=========================*/

const hoverItems=document.querySelectorAll(

"a,button,.skill-card,.project-card,.engineering-card,.certificate-card"

);

hoverItems.forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.classList.add("grow");

});

item.addEventListener("mouseleave",()=>{

cursor.classList.remove("grow");

});

});

/*=========================
CURSOR CLICK
=========================*/

document.addEventListener("mousedown",()=>{

cursor.style.transform="translate(-50%,-50%) scale(.8)";

});

document.addEventListener("mouseup",()=>{

cursor.style.transform="translate(-50%,-50%) scale(1)";

});

/*=========================
HIDE WHEN LEAVING PAGE
=========================*/

document.addEventListener("mouseleave",()=>{

cursor.style.opacity="0";

});

document.addEventListener("mouseenter",()=>{

cursor.style.opacity="1";

});