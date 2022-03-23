/*code inspired by https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci*/

const hamburgerMenu = document.querySelector(".hamburger-menu");
const mainMenu = document.querySelector(".main-menu");

hamburgerMenu.addEventListener("click", smallScreenMenu);

function smallScreenMenu() {
  hamburgerMenu.classList.toggle("active");
  mainMenu.classList.toggle("active");
}

const menuLink = document.querySelectorAll(".menu-link");
menuLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburgerMenu.classList.remove("active");
  mainMenu.classList.remove("active");
}
