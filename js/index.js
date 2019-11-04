"use strict";

// EVENT FOR CONTACT BUTTONS
document.querySelectorAll('.contactBtn').forEach(function (item) {
  item.addEventListener('click', function (event) {
    console.log('click');
    window.location.assign('index.html#kontakt');
  });
}); // EVENT FOR LEISTUNGEN BUTTON

var openLeistung = function openLeistung() {
  window.location.assign('leistungen.html');
};

document.querySelector('.leistungenBtn').addEventListener('click', openLeistung);