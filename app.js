// Variables
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const ul = document.querySelector("ul");
const navLinks = document.querySelectorAll(".side-menu a");

// Open side menu when the menu-icon is clicked
menuIcon.addEventListener("click", () => {
    ul.classList.toggle("show");
    closeIcon.classList.toggle("show");
});

// Close side menu when the close-icon is clicked
closeIcon.addEventListener("click", () => {
    ul.classList.toggle("show");
    closeIcon.classList.toggle("show");
});

// Close side menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        ul.classList.toggle("show");
        closeIcon.classList.toggle("show");
    })
});