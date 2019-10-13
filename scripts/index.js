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

