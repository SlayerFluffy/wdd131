// footer script, add copywrite year and last modified date
const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastmodified.innerHTML = document.lastModified;

// function to toggle the nav menu open and close, and change the burger menu icon

const burgerMenu = document.querySelector("#hamburgerMenuButton");
const nav = document.querySelector("nav");
burgerMenu.addEventListener('click', function() {
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        burgerMenu.innerHTML = "&#10005;";
    }else {
        burgerMenu.innerHTML = "&#9776;";
    }
});
