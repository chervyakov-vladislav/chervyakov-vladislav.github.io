//menu-hamburger

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


// accrodeon team

const accrodeonItem = document.getElementsByClassName("accordeon__item");
const accordeonTeam = document.querySelector('.accordeon');
var i;

for (i = 0; i < accrodeonItem.length; i++) {
    accrodeonItem[i].addEventListener("click", function(e) {

        if (e.target.closest('.accordeon__item').classList.contains('accordeon_active')) {
            e.preventDefault();
            e.target.closest('.accordeon__item').classList.remove('accordeon_active');
        } else {
            for (var j = 0; j < accrodeonItem.length; j++) {
                accrodeonItem[j].classList.remove('accordeon_active');
            }
            e.preventDefault();
            e.target.closest('.accordeon__item').classList.add('accordeon_active');
        }  
    });
  }


  // accrodeon menu


const menuItem = document.getElementsByClassName("vertical-accordeon__item");
  
for (i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", function(e) {

        if (e.target.closest('.vertical-accordeon__item').classList.contains('vertical-accordeon__item_active')) {
            e.preventDefault();
            e.target.closest('.vertical-accordeon__item').classList.remove('vertical-accordeon__item_active');
        } else {
            for (j = 0; j < menuItem.length; j++) {
                menuItem[j].classList.remove('vertical-accordeon__item_active');
            }
            e.preventDefault();
            e.target.closest('.vertical-accordeon__item').classList.add('vertical-accordeon__item_active');
        }  
    });
}

// slider 

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector(".slider__items");

const minRight = 0;
const maxRight = 3760;
const step = 940;
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", function(e) {
    e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    items.style.right = currentRight + "px";
  }
});

left.addEventListener("click", function(e) {
    e.preventDefault();
  if (currentRight > minRight) {
    currentRight -= step;
    items.style.right = currentRight + "px";
  }
});