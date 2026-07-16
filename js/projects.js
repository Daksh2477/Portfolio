/*==================================================
Portfolio V4
projects.js
==================================================*/

/*=========================
PROJECT DATA
=========================*/

const projects = [

{
title:"Personal Portfolio",

category:"web",

icon:"fa-user",

description:
"Modern responsive portfolio website showcasing my skills, projects and achievements with premium UI.",

stack:[
"HTML",
"CSS",
"JavaScript",
"GitHub Pages"
],

github:"#",

demo:"#"

},

{
title:"Engineering Plus Learning",

category:"datascience",

icon:"fa-chart-line",

description:
"Completed Engineering Plus Program covering Python, Data Structures, Data Analytics and Machine Learning.",

stack:[
"Python",
"NumPy",
"Pandas",
"Matplotlib",
"Seaborn"
],

github:"#",

demo:"#"

},

{
title:"Spark Game Zone",

category:"python",

icon:"fa-gamepad",

description:
"Gaming Cafe Management System developed using Python and Django with customer management and booking features.",

stack:[
"Python",
"Django",
"SQLite"
],

github:"#",

demo:"#"

},

{
title:"PhotoVerse",

category:"python",

icon:"fa-camera",

description:
"Photographer Booking Platform with authentication, booking system and admin dashboard.",

stack:[
"Python",
"Django",
"SQLite"
],

github:"#",

demo:"#"

},

{
title:"Machine Learning Practice",

category:"datascience",

icon:"fa-brain",

description:
"Learning regression, classification, data preprocessing and predictive modeling using Scikit-Learn.",

stack:[
"Python",
"Machine Learning",
"Scikit-Learn"
],

github:"#",

demo:"#"

},

{
title:"Data Analytics Dashboard",

category:"datascience",

icon:"fa-chart-pie",

description:
"Data visualization using NumPy, Pandas, Matplotlib and Seaborn with interactive analysis.",

stack:[
"NumPy",
"Pandas",
"Matplotlib",
"Seaborn"
],

github:"#",

demo:"#"

}

];

/*=========================
ELEMENTS
=========================*/

const projectGrid = document.querySelector(".project-grid");

/*=========================
LOAD PROJECTS
=========================*/

function loadProjects(){

if(!projectGrid) return;

projectGrid.innerHTML="";

projects.forEach(project=>{

const stack = project.stack.map(skill=>{

return `<span>${skill}</span>`;

}).join("");

const card=document.createElement("div");

card.className="project-card reveal";

card.dataset.category=project.category;

card.innerHTML=`

<div class="project-image">

<i class="fa-solid ${project.icon}"></i>

</div>

<div class="project-content">

<h3>${project.title}</h3>

<p>${project.description}</p>

<div class="project-stack">

${stack}

</div>

<div class="project-buttons">

<a href="${project.demo}"

target="_blank">

Live Demo

</a>

<a href="${project.github}"

target="_blank">

GitHub

</a>

</div>

</div>

`;

projectGrid.appendChild(card);

});

}

loadProjects();

/*=========================
FILTER
=========================*/

const filterButtons=document.querySelectorAll(".filter-btn");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>{

btn.classList.remove("active");

});

button.classList.add("active");

const filter=button.dataset.filter;

document.querySelectorAll(".project-card").forEach(card=>{

if(filter==="all" ||

card.dataset.category===filter){

card.style.display="block";

setTimeout(()=>{

card.style.opacity="1";

card.style.transform="translateY(0)";

},100);

}

else{

card.style.opacity="0";

card.style.transform="translateY(30px)";

setTimeout(()=>{

card.style.display="none";

},300);

}

});

});

});

/*=========================
3D EFFECT
=========================*/

document.addEventListener("mousemove",(e)=>{

document.querySelectorAll(".project-card").forEach(card=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

if(

x>=0 &&

y>=0 &&

x<=rect.width &&

y<=rect.height

){

const rotateY=(x-rect.width/2)/18;

const rotateX=(rect.height/2-y)/18;

card.style.transform=`

perspective(1000px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-10px)

`;

}

});

});

document.addEventListener("mouseleave",()=>{

document.querySelectorAll(".project-card").forEach(card=>{

card.style.transform="";

});

});