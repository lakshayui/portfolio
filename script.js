// mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});

// close menu when a link is clicked
const menuLinks = mobileMenu.querySelectorAll("a");
menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
  });
});

// dark mode (tailwind uses the "dark" class on <html>)
const themeBtn = document.getElementById("themeBtn");
const html = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  themeBtn.textContent = "Light";
}

themeBtn.addEventListener("click", function () {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeBtn.textContent = "Light";
  } else {
    localStorage.setItem("theme", "light");
    themeBtn.textContent = "Dark";
  }
});

// footer year
document.getElementById("year").textContent = new Date().getFullYear();