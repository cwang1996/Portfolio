const menuButton = document.querySelector('.menu');
const navbar = document.querySelector('.navbarlinks');

function onClick() {
    menuButton.addEventListener('click', function(){
        navbar.classList.toggle('links-active')
    });
    
}

onClick();
