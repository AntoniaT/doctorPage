 
function openNav() {
    document.getElementById("mobile-nav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mobile-nav").style.width = "0";
  }

  // ON SCROLL NAVBAR
let navBar = document.querySelector('.main-nav');
let mobileNavBar = document.querySelector('.sidenav');
let openBtn = document.querySelector('.openBtn');

window.onscroll = () => {
    let scrollPos = window.pageYOffset;
    if(scrollPos > 5) {
       navBar.classList.add('white');
       mobileNavBar.classList.add('.white');
       openBtn.classList.add('white');
    } else if(scrollPos <= 100) {
       navBar.classList.remove('white');
       openBtn.classList.remove('white');
  }
}