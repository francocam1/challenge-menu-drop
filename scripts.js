const btnMenu = document.querySelector('.header__btn-menu');
const imgMenu = btnMenu.querySelector('img');
const nav = document.querySelector('.header__nav');

btnMenu.addEventListener('click', () => {
    nav.classList.toggle('header__nav--active');
    

    if(nav.classList.contains('header__nav--active') ) {
        imgMenu.src = 'images/icon-close-menu.svg';
    } else{ imgMenu.src = 'images/icon-menu.svg';

    }
});


const navMenuBtn = document.querySelector('.nav-menu-btn');
const imgNavMenuBtn = navMenuBtn.querySelector('img');
const subMenuBtn = document.querySelector('.sub-menu');

navMenuBtn.addEventListener('click', () =>{
    subMenuBtn.classList.toggle('sub-menu--active');



    if (subMenuBtn.classList.contains('sub-menu--active')){
        imgNavMenuBtn.src = 'images/icon-arrow-up.svg';
    } else {
        imgNavMenuBtn.src = 'images/icon-arrow-down.svg';
    }
} );

