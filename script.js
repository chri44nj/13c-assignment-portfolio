const header = document.querySelector("header");
const burgerMenu = document.querySelector(".burger-menu");
const bar = document.querySelectorAll(".bar");
const navItems = document.querySelector(".nav-items");

burgerMenu.addEventListener("mousedown", showNav);

function showNav() {
  if (navItems.classList.contains("hide")) {
    navItems.classList.remove("hide");
    bar.forEach((bar) => {
      bar.classList.add("shown");
      burgerMenu.classList.add("fixed");
      console.log("JA!");
    });
  } else {
    navItems.classList.add("hide");
    bar.forEach((bar) => {
      bar.classList.remove("shown");
      burgerMenu.classList.remove("fixed");
      console.log("NEJ!");
    });
  }
}
