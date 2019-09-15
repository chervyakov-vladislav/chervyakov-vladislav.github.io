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
            .addClass('slider__dots_active')
            .siblings()
            .removeClass('slider__dots_active');
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

//one page scroll

const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const countPosition = function(sectionEq) {
    return  `${sectionEq * (-100)}%`;
};

const switchActiveClass = function(elems, elemEq) {
    elems
        .eq(elemEq)
        .addClass('section_active')
        .siblings()
        .removeClass('section_active');
};

const unBlockScroll = function() {
    setTimeout(function() {
        inScroll = false;
    }, 900); // + время против ложного срабатывания
};

const performTransition = function(sectionEq) {
    if (inScroll == false) {
        inScroll = true;
        const position = countPosition(sectionEq);
        const switchFixedMenuActiveClass = function() {
            switchActiveClass($('.fixed-menu__item'), sectionEq);
        };
        switchFixedMenuActiveClass();
        switchActiveClass(sections, sectionEq);

        display.css({
            transform : `translateY(${position})`
        });

        unBlockScroll();
    }
    
};

const scrollViewport = function (direction) {
    const activeSection = sections.filter('.section_active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction == 'next' && nextSection.length) {
        performTransition(nextSection.index());
    }
    if (direction == 'prev' && prevSection.length) {
        performTransition(prevSection.index());
    }
}

$(document).on('wheel', function(e) {
    const deltaY = e.originalEvent.deltaY;
    
    if (deltaY > 0) {
        scrollViewport("next");
    } else {
        scrollViewport("prev");
    }
});

$(document).on('keydown', function(e){
    const tagName = e.target.tagName.toLowerCase();
    const userTypingInIntuts = tagName == 'input' || tagName == 'textarea';

    if (!userTypingInIntuts) {
        switch(e.keyCode) {
            case 38 : scrollViewport('prev');
            break;
            case 40 : scrollViewport('next');
            break;
        }
    }  
});



$('[data-scroll-to]').on('click', function(e){
    e.preventDefault();

    const target = parseInt($(e.currentTarget).attr('data-scroll-to'));

    performTransition(target);
});

if (isMobile){

    window.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, {passive: false});

    $('body').swipe({

        swipe: function(event, direction) {
            let scrollDirection;
    
            if (direction == 'up') scrollDirection = 'next';
            if (direction == 'down') scrollDirection = 'prev';
    
            scrollViewport(scrollDirection);
        }
    
    });


} 



});


//popup


const openButton = document.querySelectorAll(".reviews__btn");
const successOverlay = createOverlay();

for (i = 0; i < openButton.length; i++) {
    openButton[i].addEventListener("click", function() {
        document.querySelector(".section_active").appendChild(successOverlay);
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


// video

let player;

const formatTime = timeSec => {
  const roundTime = Math.round(timeSec);

  const minutes = Math.floor(roundTime / 60);
  const seconds = roundTime - minutes * 60;

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${formattedSeconds}`;
};

const onPlayerReady = () => {
  let interval;
  let durationSec = player.getDuration();

  $(".player__duration-estimate").text(formatTime(durationSec));

  if (typeof interval !== "undefined") {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    const completedSec = player.getCurrentTime();
    const completedPercent = (completedSec / durationSec) * 100;

    $(".player__playback-button").css({
      left: `${completedPercent}%`
    });

    $(".player__duration-completed").text(formatTime(completedSec));
  }, 1000);
};

const eventsInit = () => {
  $(".player__start").on("click", e => {
    e.preventDefault();
    const btn = $(e.currentTarget);

    if (btn.hasClass("paused")) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  });

  $(".player__playback").on("click", e => {
    const bar = $(e.currentTarget);
    const newButtonPosition = e.pageX - bar.offset().left;
    const buttonPosPercent = (newButtonPosition / bar.width()) * 100;
    const newPlayerTimeSec = (player.getDuration() / 100) * buttonPosPercent;

    $(".player__playback-button").css({
      left: `${buttonPosPercent}%`
    });

    player.seekTo(newPlayerTimeSec);
  });

  $(".player__splash").on("click", e => {
    player.playVideo();
  });
};

const onPlayerStateChange = event => {
  const playerButton = $(".player__start");
  switch (event.data) {
    case 1: 
      $('.player__wrapper').addClass('active');
      playerButton.addClass("paused");
      break;
    case 2: 
      playerButton.removeClass("paused");
      break;
  }
};

function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: "405",
    width: "660",
    videoId: "V5w1OGknhlc",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    },
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    }
  });
}

eventsInit();


// map

ymaps.ready(init);

var placemarks = [
    {
        latitude: 59.95,
        longitude: 30.38,
        hintContent: '<div class = "map__hint">mr. Burger</div>',
        balloonContent: '<div class = "map__balloon">Таврический переулок 5</div>'
    },
    {
        latitude: 59.92,
        longitude: 30.30,
        hintContent: '<div class = "map__hint">mr. Burger</div>',
        balloonContent: '<div class = "map__balloon">наб. Крюкова канала 10</div>'
    }
],
    geoObjects= [];


function init() {
    var map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 12, 
        controls: ['zoomControl'],
        behaviors: ['drag']

    });

    for (var i = 0; i < placemarks.length; i++) {
        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
        {
            hintContent: placemarks[i].hintContent,
            balloonContent: placemarks[i].balloonContent
        },
        {
            iconLayout: 'default#image',
            iconImageHref: './../img/icons/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        });
    
    
    }
    

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: './../img/icons/map-marker.svg',
                size: [50, 50],
                offset: [-25, -50]
            }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
    // var placemark1 = new ymaps.Placemark([59.92, 30.30], {
    //     hintContent: '<div class = "map__hint">mr. Burger</div>',
    //     balloonContent: '<div class = "map__balloon">наб. Крюкова канала 10</div>'
    // },
    // {
    //     iconLayout: 'default#image',
    //     iconImageHref: './../img/icons/map-marker.svg',
    //     iconImageSize:[46, 57],
    //     iconImageOffset: [-23,-57]
    // });
    // map.geoObjects.add(placemark1);

    // var placemark2 = new ymaps.Placemark([59.95, 30.38], {
    //     hintContent: '<div class = "map__hint">mr. Burger</div>',
    //     balloonContent: '<div class = "map__balloon">Таврический переулок 5</div>'
    // },
    // {
    //     iconLayout: 'default#image',
    //     iconImageHref: './../img/icons/map-marker.svg',
    //     iconImageSize:[46, 57],
    //     iconImageOffset: [-23,-57]
    // });
    // map.geoObjects.add(placemark2);
   

}


