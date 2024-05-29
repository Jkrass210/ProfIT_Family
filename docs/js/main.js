const dropdownBtn = document.querySelector('#dropdown');
const dropdownList = document.querySelector('#dropdownList');
let dropdownLink = document.querySelectorAll('.menu__link');

dropdownBtn.addEventListener('click', function () {
  dropdownBtn.classList.toggle('menu__btn--active')
  dropdownList.classList.toggle('menu__items--active')
});

function removeClassName() {
  dropdownBtn.classList.remove('menu__btn--active')
  dropdownList.classList.remove('menu__items--active')
}

dropdownLink.forEach(function (listItem) {
  listItem.addEventListener('click', function(){removeClassName()})
});

document.addEventListener('click', function(e) {
  if (e.target !== dropdownBtn) {
    removeClassName()
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    removeClassName()
  }
 });

 let swiperCareer = new Swiper(".infoSwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function onStopScroll() {
  const body = document.querySelector('body')
  body.classList.toggle('stop-scroll')
}

function offStopScroll() {
  const body = document.querySelector('body')
  body.classList.remove('stop-scroll')
}

function offnav() {
  document.querySelector('.header__burger').classList.remove('header__burger--active')
  document.querySelector('.header__nav').classList.remove('header__nav--active')
  offStopScroll()
}

function openNav(el) {
  el.classList.toggle('header__burger--active');
  document.querySelector('.header__nav').classList.toggle('header__nav--active');
  onStopScroll()
}

const linkNav = document.querySelectorAll('.header__link');

linkNav.forEach(function (elem) {
  elem.addEventListener('click', function() {
    offnav()
    offStopScroll()
  })
});