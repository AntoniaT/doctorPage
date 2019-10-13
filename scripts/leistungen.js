'use strict'
import leistungen from './texte.js';

/* const newArray= leistungen.map(element => element.title);
console.log(newArray); */
/* leistungContent.forEach((element, i) =>{
        console.log(leistungen[i].title)
}); */
const myTemplate = document.querySelector("#myTemplate").content;

function showLeistung(leistungen){
leistungen.forEach(leistung => {
    console.log(leistungen); 
    console.log(leistung.copy);
    
    const clone = myTemplate.cloneNode(true);
    const parent = document.querySelector('#parent');
    let number = leistung.id;
    const background = document.querySelector(".leistungSection");

    clone.querySelector(".leistungTitle").textContent = leistung.title;
    clone.querySelector(".leistungCopy").textContent = leistung.copy;
    clone.querySelector(".leistungCopy2").textContent = leistung.copy2;

    parent.appendChild(clone);
    if(number % 2 === 0){
        console.log("this is odd!");
        console.log(background);
        background.classList.add("white");
    }
    });
}

showLeistung(leistungen);

