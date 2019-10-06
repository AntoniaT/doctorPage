'use strict'

// EVENT FOR CONTACT BUTTONS

document.querySelectorAll('.contactBtn').forEach(item =>{
    item.addEventListener('click', event => {
        console.log('click');
        window.location.assign('index.html#kontakt');
    })
})



// EVENT FOR LEISTUNGEN BUTTON

const openLeistung = () =>{
    window.location.assign('leistungen.html');
}
document.querySelector('.leistungenBtn').addEventListener('click', openLeistung);

// ON SCROLL NAVBAR
let navBar = document.querySelector('.main-nav');

window.onscroll = () => {
    let scrollPos = window.pageYOffset;
    if(scrollPos > 10) {
       navBar.classList.add('white');
    } else if(scrollPos <= 100) {
       navBar.classList.remove('white');
  }
}