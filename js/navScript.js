"use strict";

function openNav() {
  document.getElementById("mobile-nav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobile-nav").style.width = "0";
} // ON SCROLL NAVBAR


var navBar = document.querySelector('.main-nav');
var mobileNavBar = document.querySelector('.sidenav');
var openBtn = document.querySelector('.openBtn');

window.onscroll = function () {
  var scrollPos = window.pageYOffset;

  if (scrollPos > 5) {
    navBar.classList.add('white');
    mobileNavBar.classList.add('.white');
    openBtn.classList.add('white');
  } else if (scrollPos <= 100) {
    navBar.classList.remove('white');
    openBtn.classList.remove('white');
  }
};