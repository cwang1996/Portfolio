// SmoothScroll Script
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500
});

// navbarmenu selectors
const navbar2 = document.querySelector('.navbar2');
const navbar = document.getElementById('navbar');
const navbarmenu = document.querySelector('.navbarmenu');
const showmenu = document.querySelector('.barmenu');
const exitmenu = document.querySelector('.exitmenu');
const navitems = document.querySelectorAll('.nav-item');
const navblur = document.querySelector('.navblur');

showmenu.addEventListener('click', () => {
    navbar2.classList.toggle('showsidebar');
    showmenu.classList.add('hidemenu');
    exitmenu.classList.add('showmenu');
    navblur.classList.add('navbluradd');
    body.classList.add('noscroll');
})

exitmenu.addEventListener('click', () => {
    navbar2.classList.toggle('showsidebar');
    showmenu.classList.remove('hidemenu');
    exitmenu.classList.remove('showmenu');
    navblur.classList.remove('navbluradd');
    body.classList.remove('noscroll');
})

navitems.forEach((item) => {
    item.addEventListener('click', () => {
        navbar2.classList.remove('showsidebar');
        exitmenu.classList.remove('showmenu');
        navblur.classList.remove('navbluradd');
        body.classList.remove('noscroll');
        if(showmenu.classList.contains('showmenu')){
            showmenu.classList.add('hidemenu');
        } else {
            showmenu.classList.remove('hidemenu');
        }
    })
});

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
let prevScrollPos = window.scrollY;
window.onscroll = function() {
    let currentScrollPos = window.scrollY;

    if(window.scrollY > 50) {
        navbar.classList.remove('navbartransparent');
        navbar.classList.add('navbarbg');
        navbarmenu.classList.remove('navbartransparent');
        navbarmenu.classList.add('navbarbg');
    } else {
        navbar.classList.add('navbartransparent');
        navbar.classList.remove('navbarbg');
        navbarmenu.classList.add('navbartransparent');
        navbarmenu.classList.remove('navbarbg');
    }

    if(prevScrollPos > currentScrollPos) {
        navbar.classList.remove('shownavbar');
        navbarmenu.classList.remove('shownavbar');
    } else {
        navbar.classList.add('shownavbar');
        navbarmenu.classList.add('shownavbar');
    }
    prevScrollPos = currentScrollPos;
}
