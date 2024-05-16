let buttons = document.querySelectorAll(".nav__button");
console.log(buttons)
window.onscroll = function() {
    let h =document.documentElement.clientHeight;
    let activeButton;
    if (window.scrollY >= 4*h) {
        activeButton = buttons[4];
    }
    else if (window.scrollY >= 3*h) {
        activeButton = buttons[3];
    }
    else if (window.scrollY >= 2*h) {
        activeButton = buttons[2];
    }
    else if (window.scrollY >= h) {
        activeButton = buttons[1];
    }
    else {
        activeButton = buttons[0];
    }
    let oldActive = document.querySelector(".active");
    oldActive.classList.remove ("active")
    activeButton.classList.add ("active")
}

let mobileMenu = document.querySelector(".mobile__nav");
let menuButton = document.querySelector(".mobile__button");
menuButton.addEventListener('click', e => {
    mobileMenu.classList.toggle ("hidden")
})