//menu-hamburger

const burgerButton = document.querySelector('.hamburger-menu-link');
const burgerStyle = document.querySelector('.hamburger');
const burgerClose = document.querySelector('.hamburger__menu-close');
const burgerLogo = document.querySelector('.logo');

burgerButton.addEventListener('click', function(e) {
    e.preventDefault();
    burgerStyle.style.display = 'flex';
});

burgerClose.addEventListener('click', function(e) {
    e.preventDefault();
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


const itemsWidth = document.querySelector(".slider__items"); //дописал Width
const itemWidth = document.querySelectorAll(".slider__item"); //дописал Width
const containerWidth = document.querySelector(".container");
const hoverСlose = document.querySelector(".slider__consist_hover-close");
const hoverOpen = document.querySelector(".slider__consist_item");

hoverСlose.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".slider__consist_hover").style.display = "none";
});

hoverOpen.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".slider__consist_hover").style.display = "block";
});


let itemsCount = itemsWidth.childElementCount;
const step = containerWidth.offsetWidth;

itemsWidth.style.width = step * itemsCount + "px";

for (i=0; i < itemsCount; i++) {
    itemWidth[i].style.width = containerWidth.offsetWidth + "px"; 
}

// const left = document.querySelector("#left");
// const right = document.querySelector("#right");

// const step = containerWidth.offsetWidth;
// const maxRight = step * (itemsCount - 1);
// const minRight = 0;
// let currentRight = 0;

// items.style.right = currentRight;
// right.addEventListener("click", function(e) {
//     e.preventDefault();
//   if (currentRight < maxRight) {
//     currentRight += step;
//     items.style.right = currentRight + "px";
//   } else {
//     currentRight = minRight;
//     items.style.right = currentRight + "px";
//   }
// });

// left.addEventListener("click", function(e) {
//     e.preventDefault();
//   if (currentRight > minRight) {
//     currentRight -= step;
//     items.style.right = currentRight + "px";
//   } else {
//     currentRight = maxRight;
//     items.style.right = currentRight + "px";
//   }
// });


//jquery slider 

$(function () {

    var coloringDots = function(index) {
        $('.slider')
            .find('.slider__dots_img')
            .eq(index)
            .addClass('.slider__dots_active')
            .siblings()
            .removeClass('.slider__dots_active');
    }

    var generateDots = function() {
        $('.slider__item').each( function() {
            var dot = $('<li>', {
                attr : {
                    'class' : 'slider__dots_img'
                },
                html : $('<img>', {
                    'alt' : 'Burger',
                    'class' : 'slider__dots_pic',
                    'src' : $('.slider__pic', this).attr('src')
                })

                
            })
            $('.slider__dots').append(dot);
        })
    };

    generateDots();

    

    var moveSlide = function (container, slideNum) {
        var items = container.find('.slider__item'),
            activeSlide = items.filter('.active'),
            reqItem = items.eq(slideNum),
            reqIndex = reqItem.index(),
            list = container.find('.slider__items'),
            duration = 500;

            if (reqItem.length) {
                list.animate({
                    'left' : -reqIndex * 100 + '%'
                }, duration, function(){
                    activeSlide.removeClass('active');
                    reqItem.addClass('active');
                    coloringDots(slideNum);
                });
            }
    }
    
    $('.slider__arrow').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            container = $this.closest('.slider'),
            items = $('.slider__item', container),
            activeItem = items.filter('.active'),
            existedItem, edgeItem, reqItem;

        if ($this.hasClass('right')) {
            existedItem = activeItem.next();
            edgeItem = items.first();     
        } else {
            existedItem = activeItem.prev();
            edgeItem = items.last();
        }

        reqItem = existedItem.length ? existedItem.index() : edgeItem.index();
        
        moveSlide(container, reqItem);
    });

    $('body').on('click', '.slider__dots_img', function() {
        var $this = $(this),
        container = $this.closest('.slider'),
        index = $this.index();

        moveSlide(container, index);
        coloringDots(index);

    });

});


//popup


const openButton = document.querySelectorAll(".reviews__btn");
const successOverlay = createOverlay();

for (i = 0; i < openButton.length; i++) {
    openButton[i].addEventListener("click", function() {
        document.querySelector(".reviews").appendChild(successOverlay);
      });
}

function createOverlay() {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#reviewTemplate");
  overlayElement.innerHTML = template.innerHTML;

  const closeElement = overlayElement.querySelector(".popup__close");
  closeElement.addEventListener("click", function(e) {
    e.preventDefault();     
    document.querySelector(".reviews").removeChild(overlayElement);
  });

  const contentElement1 = overlayElement.querySelector(".popup__text");
  contentElement1.innerHTML = "Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным. Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.";

  const contentElement2 = overlayElement.querySelector(".popup__title");
  contentElement2.innerHTML = "Константин Спилберг";

  return overlayElement;
}


//form

const myForm = document.querySelector('.form__elem');
const sendButton = document.querySelector('#sendButton');

var contentTitle = "";
var contentText = "";
var contentTextError = "Вы не ввели... ";



sendButton.addEventListener("click", function(e) {
    e.preventDefault();

    if (validateForm(myForm)) {
        var formData = new FormData(myForm);

        formData.append("name", myForm.elements.name.value);
        formData.append("phone", myForm.elements.phone.value);
        formData.append("comment", myForm.elements.comment.value);
        formData.append("to", "vasya@petya.ru");
        
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(formData);
        xhr.addEventListener('load', function() {
            if (xhr.response.status == true) {
                contentTitle = "Отлично!";
                contentText = xhr.response.message;
                createMessage();
                contentTitle = "";
                contentText = "";
            } else {
                
                contentTitle = "Ошибка";
                contentText = xhr.response.message;
                createMessage();
                contentTitle = "";
                contentText = "";
            }
            
        });

    } else { 
            contentTitle = "Упс... Ошибка";
            contentText = contentTextError;
            createMessage();
            contentTextError = "Вы не ввели... ";
    }
})

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
        contentTextError = contentTextError + "Имя... ";
    }

    if (!validateField(form.elements.phone)) {
        valid = false;
        contentTextError = contentTextError + "Номер телефона... ";
    }

    if (!validateField(form.elements.comment)) {
        valid = false;
        contentTextError = contentTextError + "Комментарий... ";
    }

    return valid;
} 

function validateField(field) {
    return field.checkValidity();
}

function createMessage() {
    const successSend = createOverlay();
    document.querySelector(".order").appendChild(successSend);
    
    function createOverlay() {
        const overlayElement = document.createElement("div");
        overlayElement.classList.add("overlay");
        
        const template = document.querySelector("#formTemplate");
        overlayElement.innerHTML = template.innerHTML;
        
        const closeElement = overlayElement.querySelector(".form-popup__btn");
        closeElement.addEventListener("click", function(e) {
            e.preventDefault();     
            document.querySelector(".order").removeChild(overlayElement);
        });

        const contentElement2 = overlayElement.querySelector(".form-popup__title");
        contentElement2.innerHTML = contentTitle;
        
        
        const contentElement1 = overlayElement.querySelector(".form-popup__text");
        contentElement1.innerHTML = contentText;
        
        
        return overlayElement;
    }
}

