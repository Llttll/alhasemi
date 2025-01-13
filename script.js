// script.js


// menu

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-links a");

// Toggle the menu when the hamburger icon is clicked
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close the menu when a link is clicked
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// image scroll




