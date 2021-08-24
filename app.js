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
const navitems = document.querySelectorAll('.nav-item');

navbarmenu.addEventListener('click', () => {
    navbar.classList.toggle('shownavbar');
})

navitems.forEach((item) => {
    item.addEventListener('click', () => {
        navbar.classList.remove('shownavbar');
    })
});

// modal
const modal = document.querySelector('.modal-1');
const modal2 = document.querySelector('.modal-2');
const modal3 = document.querySelector('.modal-3');
const modal4 = document.querySelector('.modal-4');
const project1 = document.querySelector('.project-one');
const project2 = document.querySelector('.project-two');
const project3 = document.querySelector('.project-three');
const project4 = document.querySelector('.project-four');
const exit = document.querySelector('.exit');
const exit2 = document.querySelector('.exit2');
const exit3 = document.querySelector('.exit3');
const exit4 = document.querySelector('.exit4');
const body = document.getElementById('body');
const overlay = document.querySelector('.overlay');

project1.addEventListener('click', () => {
    modal.classList.add('modal-show');
    body.classList.add('modal-open');
    overlay.classList.add('show-overlay');
})

project2.addEventListener('click', () => {
    modal2.classList.add('modal-show');
    body.classList.add('modal-open');
    overlay.classList.add('show-overlay');
})

project3.addEventListener('click', () => {
    modal3.classList.add('modal-show');
    body.classList.add('modal-open');
    overlay.classList.add('show-overlay');
})

project4.addEventListener('click', () => {
    modal4.classList.add('modal-show');
    body.classList.add('modal-open');
    overlay.classList.add('show-overlay');
})

exit.addEventListener('click', () => {
    modal.classList.remove('modal-show');
    body.classList.remove('modal-open');
    overlay.classList.remove('show-overlay');
})

exit2.addEventListener('click', () => {
    modal2.classList.remove('modal-show');
    body.classList.remove('modal-open');
    overlay.classList.remove('show-overlay');
})

exit3.addEventListener('click', () => {
    modal3.classList.remove('modal-show');
    body.classList.remove('modal-open');
    overlay.classList.remove('show-overlay');
})

exit4.addEventListener('click', () => {
    modal4.classList.remove('modal-show');
    body.classList.remove('modal-open');
    overlay.classList.remove('show-overlay');
})



