const bars = document.querySelector(".bars");
const cross = document.querySelector(".cross");
const navLinks = document.querySelector(".nav-links");
const light = document.querySelector(".light");
const mode = document.querySelector(".btn-mode");
const body = document.querySelector("body");
const dark = document.querySelector(".dark");
const btnHire = document.querySelector(".hirebtn");
const section4 = document.querySelector(".section-4");
const navLink = document.querySelectorAll(".nav-link");
function navHideAndShow() {
  navLinks.classList.toggle("show-links");
  cross.classList.toggle("hidden");
  bars.classList.toggle("hidden");
}
bars.addEventListener("click", function () {
  navHideAndShow();
});
cross.addEventListener("click", function () {
  navHideAndShow();
});

// for transition in dark and white mode
function transitionMode() {
  body.style.transition = `0.6s`;
}
// for light mode
light.addEventListener("click", function () {
  body.classList.remove("dark-mode");
  transitionMode();
  light.classList.add("hidden");
  dark.classList.remove("hidden");
});
// for dark mode
dark.addEventListener("click", function () {
  dark.classList.add("hidden");
  transitionMode();
  light.classList.remove("hidden");
  body.classList.add("dark-mode");
});
btnHire.addEventListener("click", function (e) {
  console.log(e);
  section4.scrollIntoView({ behavior: `smooth` });
});
navLinks.addEventListener("click", function (e) {
  // console.log(e);
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    // console.log(id);
    // console.log(document.querySelector(id));
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
  if (e.target.classList.contains("resume-btn")) {
    window.open("portfolio.pdf");
  }
});
// fade animation
