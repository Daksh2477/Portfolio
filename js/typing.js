/*==================================================
Portfolio V4
typing.js
==================================================*/

const words = [

"Computer Science Student",

"Data Science Student",

"Python Programmer",

"Data Analyst",

"Machine Learning Enthusiast",

"Problem Solver",

"Engineering Plus Learner",

"Technical Event Coordinator",

"Hackathon Participant"

];

const typing = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;
let speed = 100;

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex + 1);

        charIndex++;

        speed = 90;

        if (charIndex === currentWord.length) {

            deleting = true;

            speed = 1800;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex - 1);

        charIndex--;

        speed = 45;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, speed);

}

window.addEventListener("load", () => {

    typeEffect();

});