// Variables
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const ul = document.querySelector("ul");
const body = document.querySelector("body");

menuIcon.addEventListener("click", () => {
    ul.classList.toggle("show");
    closeIcon.classList.toggle("show");
});

closeIcon.addEventListener("click", () => {
    ul.classList.toggle("show");
    closeIcon.classList.toggle("show");
});