const burgerButton = document.querySelector('.hamburger-menu-link');
const burgerStyle = document.querySelector('.hamburger');
const burgerClose = document.querySelector('.hamburger__menu-close');
const burgerLogo = document.querySelector('.logo');

burgerButton.addEventListener('click', function(e) {
    burgerStyle.style.display = 'flex';
});

burgerClose.addEventListener('click', function(e) {
    burgerStyle.style.display = 'none';
});