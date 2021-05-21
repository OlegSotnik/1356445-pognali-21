const mainNav = document.querySelector(".main-nav");
const pageHeaderTop = document.querySelector(".page-header__top");
const logoLink = document.querySelector(".logo-link");
const pageHeader = document.querySelector(".page-header");
const mainNavToggle = document.querySelector(".main-nav__toggle");

mainNav.classList.add("main-nav--closed");
pageHeaderTop.classList.add("page-header__top--background-color");
logoLink.classList.add("logo-image--toggle-closed");
pageHeader.classList.add("page-header--background");
mainNavToggle.classList.remove("visually-hidden");

mainNavToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNavToggle.classList.toggle("main-nav__toggle--closed");
  pageHeaderTop.classList.toggle("page-header__top--background-color");
  pageHeader.classList.toggle("page-header--background");
  logoLink.classList.toggle("logo-image--toggle-closed");
  mainNav.classList.toggle("main-nav--closed");
});
