"use strict";
// POP UP TEXT
let popUp = document.querySelector('.popup');
let popUpOpen = document.querySelector('.video__text-link');
let popUpClose = document.querySelector('.popup__close');

popUpOpen.onclick = function (event) {
  event.preventDefault();
  popUp.classList.add('active');
}
popUpClose.onclick = function () {
  popUp.classList.remove('active');
}
window.onclick = function (e) {
  if (e.target == popUp) {
    popUp.classList.remove('active');
  }
};
// ===== PHOTO SLIDER ======
let nextArrow = document.querySelector('.gallery__next-arrow');
let prevArrow = document.querySelector('.gallery__prev-arrow');
let slider = document.querySelector('.gallery__slider-inner');
let photo = document.querySelectorAll('.gallery__slider-item');

let zeroPoint = 0;
nextArrow.onclick = function () {
  zeroPoint++;
  for (let i of photo) {
    if (zeroPoint == 0) {
      i.style.left = '0px';
    }
    if (zeroPoint == 1) {
      i.style.left = '-388px';
    }
    if (zeroPoint == 2) {
      i.style.left = '-776px';
    }
    if (zeroPoint == 3) {
      i.style.left = '-1164px';
    }
    if (zeroPoint == 4) {
      i.style.left = '-1552px';
    }
    if (zeroPoint == 5) {
      i.style.left = '-1940px';
    }
    if (zeroPoint > 5) {
      zeroPoint = 5;
    }
  }
}
prevArrow.onclick = function () {
  zeroPoint--;
  for (let i of photo) {
    if (zeroPoint == 0) {
      i.style.left = '0px';
    }
    if (zeroPoint == 1) {
      i.style.left = '-388px';
    }
    if (zeroPoint == 2) {
      i.style.left = '-776px';
    }
    if (zeroPoint == 3) {
      i.style.left = '-1164px';
    }
    if (zeroPoint == 4) {
      i.style.left = '-1552px';
    }
    if (zeroPoint == 5) {
      i.style.left = '-1940px';
    }

    if (zeroPoint < 0) {
      zeroPoint = 0;
    }
  }

}
// ====== HEADER BURGER =========
let burger = document.querySelector('.header__nav-burger');
let menu = document.querySelector('.header__nav-list');
let spanOne = document.querySelector('.header__nav-span:nth-child(1)');
let spanTwo = document.querySelector('.header__nav-span:nth-child(2)');
let spanThree = document.querySelector('.header__nav-span:nth-child(3)');

burger.addEventListener('click', function () {
  menu.classList.toggle('header__nav-list-open');
  spanOne.classList.toggle('transform');
  spanTwo.classList.toggle('transform');
  spanThree.classList.toggle('transform');
});
//=====CLOSE MENU ==============
let menuItems = document.querySelectorAll('.header__nav-item');
menuItems.forEach((element) => {
  element.onclick = function () {
    menu.classList.remove('header__nav-list-open');
    spanOne.classList.remove('transform');
    spanTwo.classList.remove('transform');
    spanThree.classList.remove('transform');
  }
});
// ======== POP UP SLIDER ==================
let popSlider = document.querySelector('.pop-slider');
let popSliderOpen = document.querySelectorAll('.gallery__slider-img');
let popSliderClose = document.querySelector('.pop-slider__close');
let openCard = Array.from(popSliderOpen);

openCard.forEach((elem) => {
  elem.onclick = function () {
    popSlider.classList.add('active');
  };

});
popSliderClose.onclick = function () {
  popSlider.classList.remove('active');
};
window.onclick = function (e) {
  if (e.target == popSlider) {
    popSlider.classList.remove('active');
  }
};


// ====== POP UP SLIDER SCROLL ========
let nextButton = document.querySelector('.pop-slider__next-btn');
let prevButton = document.querySelector('.pop-slider__prev-btn');
let slideBox = document.querySelector('.pop-slider__inner');
let startPoint = 0;

nextButton.addEventListener('click', function () {

  startPoint = startPoint + 100;
  if (startPoint > 1100) {
    startPoint = 0;
  }
  slideBox.style.left = -startPoint + '%'

});

prevButton.addEventListener('click', function () {
  console.log('hello');
  startPoint = startPoint - 100;
  if (startPoint < 0) {
    startPoint = 1100;
  }
  slideBox.style.left = -startPoint + '%'
});
//============= MAP =================
let googleMap = document.querySelector('.map');
let openMap = document.querySelector('.map__inner');
googleMap.onclick = () => {
  openMap.classList.add('open-map');
}















