"use strict";
/* 
var _texte = _interopRequireDefault(require("./texte.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myTemplate = document.querySelector("#myTemplate").content;

function showLeistung(leistungen) {
  leistungen.forEach(function (leistung) {
    var clone = myTemplate.cloneNode(true);
    var parent = document.querySelector('#parent');
    var number = leistung.id;
    var background = document.querySelectorAll(".leistungSection");
    clone.querySelector(".leistungTitle").textContent = leistung.title;
    clone.querySelector(".leistungCopy").textContent = leistung.copy;
    clone.querySelector(".leistungCopy2").textContent = leistung.copy2;
    clone.querySelector(".leistungSection").id = leistung.id;

    if (number % 2 === 0) {
      clone.querySelector(".leistungSection").classList.add("grey");
    }

    parent.appendChild(clone);
  });
}

showLeistung(_texte.default); */ // EVENTS FOR BACK BUTTONS and TERMIN VEREINBAREN BUTTONS

document.querySelectorAll('.backBtn').forEach(function (item) {
  item.addEventListener('click', function (event) {
    console.log('click back');
    window.location.assign('leistungen.html#leistungenStart');
  });
});
document.querySelectorAll('.terminBtn').forEach(function (item) {
  item.addEventListener('click', function (event) {
    console.log('click to contact');
    window.location.assign('index.html#kontakt');
  });
});