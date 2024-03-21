"use strict";

const navigation = document.getElementById("navigation"),
  navLinks = document.querySelectorAll(".nav-link"),
  heroSection = document.querySelector(".hero-section"),
  btnPlayNow = document.querySelector(".btn-playnow"),
  allSections = document.querySelectorAll("section"),
  footerSectionLinks = document.querySelectorAll(".section-link");

//scrolling navigation
const navigationHeight = navigation.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navigation.classList.add("sticky");
  else navigation.classList.remove("sticky");
};

const heroSectionObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navigationHeight}px`,
});
heroSectionObserver.observe(heroSection);

//section scroll
const removeActiveNavLinks = function () {
  navLinks.forEach((navLink) => {
    navLink.classList.remove("navlink_active");
  });
};

document.querySelector(".navbar-nav").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    removeActiveNavLinks();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    e.target.classList.add("navlink_active");
  }
});

window.onscroll = () => {
  allSections.forEach((section) => {
    let scroll = window.scrollY + 7;
    let sectionHeight = section.offsetHeight;
    let offsetTop = section.offsetTop;
    let id = section.getAttribute("id");

    if (scroll >= offsetTop && scroll < offsetTop + sectionHeight) {
      removeActiveNavLinks();
      document
        .querySelector(`.nav-link[href*='${id}']`)
        .classList.add("navlink_active");
    }
  });
};

//btn play now
btnPlayNow.addEventListener("click", () => {
  const id = btnPlayNow.getAttribute("href");
  console.log(id);
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

//footer section link
footerSectionLinks.forEach((footerSectionLink) => {
  footerSectionLink.addEventListener("click", () => {
    const id = footerSectionLink.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

// preloader
const preloader = document.getElementById("preloader");
console.log(preloader);
window.addEventListener("load", () => (preloader.style.display = "none"));

//login and register
const loginRegister = function (id, path) {
  document.getElementById(`${id}`).addEventListener("click", function () {
    window.location.href = `${path}`;
  });
};

loginRegister("login-btn", "./login/login.html");
loginRegister("register-btn", "./sign up/registration.html");
