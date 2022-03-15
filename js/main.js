'use strict';
document.addEventListener('DOMContentLoaded', function () {

  // HEADER : show sub-menu
  const mainMenu = document.querySelectorAll('.main-menu');

  for (let i = 0; i < mainMenu.length; i++) {
    mainMenu[i].addEventListener('click', function () {
      mainMenu[i].classList.toggle('showSub');
    });

  }

  // HEADER : menu toggle event
  const toggleBox = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main--nav');

  toggleBox.addEventListener('click', function () {
    navigation.classList.toggle('active');
  });

  // HEADER : close menu when scrolling
  const header = document.querySelector('#header');
  const headerHeight = header.getBoundingClientRect().height;
  document.addEventListener('scroll', function () {
    if (window.scrollY > headerHeight) {
      navigation.classList.remove('active');
    }
  });


  // ARROW UP BUTTON
  const arrowUp = document.querySelector('#arrow-up');
  const home = document.querySelector('#main');
  const homeHeight = home.getBoundingClientRect().height;

  document.addEventListener('scroll', function () {
    if (window.scrollY > homeHeight / 5) {
      arrowUp.classList.add('visible');
    } else {
      arrowUp.classList.remove('visible');
    }
  });

  arrowUp.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

});