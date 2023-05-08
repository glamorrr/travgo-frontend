// navigation to signup form
var signupBtn = document.getElementById('signup-btn');
signupBtn.addEventListener('click', function () {
  window.location.href = '/signup.html'; // Halaman sign up
});

// navigation to login form
var loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function () {
  window.location.href = '/login.html'; // Halaman login up
});

// image slider payment
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelector('.slider-wrapper');
const innerSlider = document.querySelector('.slider-inner');

let dragged = false;
let startX;
let x;

slider.addEventListener('mouseenter', () => {
  slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', (e) => {
  if (!dragged) return;
  e.preventDefault();

  x = e.offsetX;

  innerSlider.style.left = `${x - startX}px`;

  checkProbs();
});
slider.addEventListener('mouseup', () => {
  slider.style.cursor = 'grab';
  dragged = false;
});
slider.addEventListener('mousedown', (e) => {
  dragged = true;
  startX = e.offsetX - innerSlider.offsetLeft;
  slider.style.cursor = 'grabbing';
});

slider.addEventListener(
  'touchstart',
  (e) => {
    dragged = true;
    startX = e.targetTouches[0].clientX - innerSlider.offsetLeft;

    checkProbs();
  },
  { passive: true }
);

slider.addEventListener(
  'touchmove',
  (e) => {
    if (!dragged) return;
    x = e.targetTouches[0].clientX;

    innerSlider.style.left = `${x - startX}px`;

    checkProbs();
  },
  { passive: true }
);

prev.addEventListener('click', () => {
  let innerSliderLeft = innerSlider.style.left;
  innerSlider.style.left = parseInt(innerSliderLeft.replace('px', '')) + 100 + 'px';

  checkProbs();
});

next.addEventListener('click', () => {
  let innerSliderLeft = innerSlider.style.left;
  innerSlider.style.left = innerSliderLeft.replace('px', '') - 100 + 'px';

  checkProbs();
});

const checkProbs = () => {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) innerSlider.style.left = '-10px';

  if (inner.right < outer.right) innerSlider.style.left = `-${inner.width - outer.width - 10}px`;
};

// slider
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cardWrapper = document.querySelector('.card-wrapper');

let cardCount = document.querySelectorAll('.card').length;
let cardWidth = document.querySelector('.card').offsetWidth;
let cardMarginRight = parseInt(
  window.getComputedStyle(document.querySelector('.card')).marginRight
);
let cardTotalWidth = cardWidth + cardMarginRight;
let cardWrapperWidth = cardTotalWidth * cardCount;
cardWrapper.style.width = cardWrapperWidth + 'px';

let currentSlide = 0;

prevBtn.addEventListener('click', () => {
  if (currentSlide === 0) {
    currentSlide = cardCount - 1;
  } else {
    currentSlide--;
  }
  cardWrapper.style.transform = `translateX(-${currentSlide * cardTotalWidth}px)`;
});

nextBtn.addEventListener('click', () => {
  if (currentSlide === cardCount - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  cardWrapper.style.transform = `translateX(-${currentSlide * cardTotalWidth}px)`;
});

// recomm

// like button
var btnvar1 = document.getElementById('btnh1');

function Toggle1() {
  if (btnvar1.style.background == 'red') {
    btnvar1.style.background = 'grey';
  } else {
    btnvar1.style.background = 'red';
  }
}

var btnvar2 = document.getElementById('btnh2');

function Toggle2() {
  if (btnvar2.style.background == 'red') {
    btnvar2.style.background = 'grey';
  } else {
    btnvar2.style.background = 'red';
  }
}

var btnvar3 = document.getElementById('btnh3');

function Toggle3() {
  if (btnvar3.style.background == 'red') {
    btnvar3.style.background = 'grey';
  } else {
    btnvar3.style.background = 'red';
  }
}

var btnvar4 = document.getElementById('btnh4');

function Toggle4() {
  if (btnvar4.style.background == 'red') {
    btnvar4.style.background = 'grey';
  } else {
    btnvar4.style.background = 'red';
  }
}

var btnvar5 = document.getElementById('btnh5');

function Toggle5() {
  if (btnvar5.style.background == 'red') {
    btnvar5.style.background = 'grey';
  } else {
    btnvar5.style.background = 'red';
  }
}

var btnvar6 = document.getElementById('btnh6');

function Toggle6() {
  if (btnvar6.style.background == 'red') {
    btnvar6.style.background = 'grey';
  } else {
    btnvar6.style.background = 'red';
  }
}

// navbar inner
var btnContainer = document.getElementById('navbar2');
var btns22 = btnContainer.getElementsByClassName('menu');

for (var i = 0; i < btns22.length; i++) {
  btns22[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active');
    this.className += ' active';
  });
}
// to content
$(document).ready(function () {
  $('.menu').click(function (e) {
    e.preventDefault();

    var menu = $(this).attr('id');

    if (menu == 'recommendation') {
      document.querySelector('#recomm').classList.remove('d-none');
      document.querySelector('#all-flight-content').classList.add('d-none');
    } else if (menu == 'Flights') {
      document.querySelector('#recomm').classList.add('d-none');
      document.querySelector('#all-flight-content').classList.remove('d-none');
    }
  });
});

// like button rrecommended 1
var btnvar7 = document.getSelection('btnc2');

function toggle7() {
  if (btnvar7.style.background == 'red') {
    btnvar7.style.background = 'grey';
  } else {
    btnvar7.style.background = 'red';
  }
}
