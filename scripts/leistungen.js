'use strict'
import leistungen from './texte.js';

/* const newArray= leistungen.map(element => element.title);
console.log(newArray); */
/* leistungContent.forEach((element, i) =>{
        console.log(leistungen[i].title)
}); */

leistungen.forEach(element => {
    console.log(element.title); 
    console.log(element.copy);
    
    const clone = myTemplate.cloneNode(true);
    const parent = document.querySelector('#parent');

    clone.querySelector(".leistungTitle").textContent = element.title;
    clone.querySelector(".leistungCopy").textContent = element.copy;

    parent.appendChild(clone);
    });

