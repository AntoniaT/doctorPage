'use strict'
import leistungen from './texte.js';

/* const myTemplate = document.querySelector("#myTemplate").content;

function showLeistung(leistungen){
leistungen.forEach(leistung => {
    
    const clone = myTemplate.cloneNode(true);
    const parent = document.querySelector('#parent');
    let number = leistung.id;
    const background = document.querySelectorAll(".leistungSection");

    clone.querySelector(".leistungTitle").textContent = leistung.title;
    clone.querySelector(".leistungCopy").textContent = leistung.copy;
    clone.querySelector(".leistungCopy2").textContent = leistung.copy2;
    clone.querySelector(".leistungSection").id = leistung.id;
    if(number % 2 === 0){
        clone.querySelector(".leistungSection").classList.add("grey");
    }
    parent.appendChild(clone);

    });
}

showLeistung(leistungen); */

// EVENTS FOR BACK BUTTONS and TERMIN VEREINBAREN BUTTONS

document.querySelectorAll('.backBtn').forEach(item =>{
    item.addEventListener('click', event => {
        console.log('click');
        window.location.assign('leistungen.html#leistungenStart');
    })
})
document.querySelectorAll('.terminBtn').forEach(item =>{
    item.addEventListener('click', event => {
        console.log('click');
        window.location.assign('index.html#kontakt');
    })
})