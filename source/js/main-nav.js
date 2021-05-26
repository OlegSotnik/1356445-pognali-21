const mainNav = document.querySelector(".main-nav");
const pageHeaderTop = document.querySelector(".page-header__top");
const logoLink = document.querySelector(".logo-link");
const pageHeaderContainer = document.querySelector(".page-header-container");
const mainNavToggle = document.querySelector(".main-nav__toggle");

mainNav.classList.add("main-nav--closed");
pageHeaderTop.classList.add("page-header__top--background-color");
logoLink.classList.add("logo-image--toggle-closed");
mainNavToggle.classList.remove("visually-hidden");

mainNavToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNavToggle.classList.toggle("main-nav__toggle--closed");
  pageHeaderTop.classList.toggle("page-header__top--background-color");
  pageHeaderContainer.classList.toggle("page-header-container--background");
  logoLink.classList.toggle("logo-image--toggle-closed");
  mainNav.classList.toggle("main-nav--closed");
});
