// SmoothScroll Script
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500
});

// navbarmenu
const navbarmenu = document.querySelector('.navbarmenu');
const showmenu = document.querySelector('.barmenu');
const exitmenu = document.querySelector('.exitmenu');
const navitems = document.querySelectorAll('.nav-item');

showmenu.addEventListener('click', () => {
    navbar.classList.toggle('shownavbar');
    showmenu.classList.add('hidemenu');
    exitmenu.classList.add('showmenu');
})

exitmenu.addEventListener('click', () => {
    navbar.classList.toggle('shownavbar');
    showmenu.classList.remove('hidemenu');
    exitmenu.classList.remove('showmenu');
})

navitems.forEach((item) => {
    item.addEventListener('click', () => {
        navbar.classList.remove('shownavbar');
        exitmenu.classList.remove('showmenu');
        if(showmenu.classList.contains('showmenu')){
            showmenu.classList.add('hidemenu');
        } else {
            showmenu.classList.remove('hidemenu');
        }
    })
});

// modal items
const modal = document.querySelector('.modal-1');
const modal2 = document.querySelector('.modal-2');
const modal3 = document.querySelector('.modal-3');
const modal4 = document.querySelector('.modal-4');
const modal5 = document.querySelector('.modal-5');
const project1 = document.querySelector('.project-one');
const project2 = document.querySelector('.project-two');
const project3 = document.querySelector('.project-three');
const project4 = document.querySelector('.project-four');
const project5 = document.querySelector('.project-five');
const exit = document.querySelector('.exit');
const exit2 = document.querySelector('.exit2');
const exit3 = document.querySelector('.exit3');
const exit4 = document.querySelector('.exit4');
const exit5 = document.querySelector('.exit5');
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

project5.addEventListener('click', () => {
    modal5.classList.add('modal-show');
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

exit5.addEventListener('click', () => {
    modal5.classList.remove('modal-show');
    body.classList.remove('modal-open');
    overlay.classList.remove('show-overlay');
})

// animations
const projectitems = document.querySelectorAll('.scroll-animation');

// trigger animations when scroll
const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return(
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
}

const handleScrollAnimation = () => {
    projectitems.forEach((el) => {
        if(elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    })
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
})

//when scrolling down navbar will disappear, when scrolling up navbar will appear with a background
const navbar = document.getElementById('navbar');
let prevScrollPos = window.scrollY;
window.onscroll = function() {
    let currentScrollPos = window.scrollY;

    if(window.scrollY > 50) {
        navbar.classList.remove('navbartransparent');
        navbar.classList.add('navbarbg');
    } else {
        navbar.classList.add('navbartransparent');
        navbar.classList.remove('navbarbg');
    }

    if(prevScrollPos > currentScrollPos) {
        navbar.classList.remove('shownavbar');
    } else {
        navbar.classList.add('shownavbar');
    }
    prevScrollPos = currentScrollPos;
}
