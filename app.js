//auto text
const text_auto = document.querySelector('.text-auto')

let text = "A Front End Developer";
let index = 1;

setInterval(writeText, 100)

function writeText(){
    text_auto.innerText = text.slice(0, index);
    index++;
}

// SmoothScroll Script
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500
});

// sticky navbar
window.onscroll = function() {myFunction()}

const navbar = document.querySelector('.navbar');
const sticky = navbar.offsetTop;

const myFunction = () => {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky');
    }
}

// navbarmenu

const navbarmenu = document.querySelector('.navbarmenu');

navbarmenu.addEventListener('click', () => {
    navbar.classList.toggle('shownavbar');
})
