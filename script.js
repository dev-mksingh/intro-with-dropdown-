const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.modal');
const expands = document.querySelectorAll('.expand');
const submenu = document.querySelectorAll('.submenu');
const arrows = document.querySelectorAll('.arrow-down');

menu.addEventListener('click', function(){
    menu.classList.toggle('close-menu');
    nav.classList.toggle('close-modal');
})

for(let i = 0; i< expands.length; i++) {
    expands[i].addEventListener('click', function(){
        submenu[i].classList.toggle('submenu-display');
        if(submenu[i].className=="submenu") {
            arrows[i].setAttribute('src','images/icon-arrow-down.svg');
        }else {
            arrows[i].setAttribute('src','images/icon-arrow-up.svg');
        }
    })
}

