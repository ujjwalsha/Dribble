'use strict';

const backBtn = document.querySelector('[back-button]');
const optionBox = document.querySelectorAll('.image');
const selectedTab = document.querySelectorAll('.fa-solid');
const finalBtn = document.querySelector('.final');
const dashboardSection = document.querySelector('.dashboard');

selectedTab.forEach(e => {
  e.style.display = 'none';
});

backBtn.addEventListener('click', () => {
  window.history.back();
});

optionBox.forEach(e => {
  e.addEventListener('click', element => {
    optionBox.forEach(el => {
      el.classList.remove('border');
    });

    finalBtn.classList.add('clicked');
    e.classList.add('border');
    e.classList.remove('image');

    console.log(e);
  });
});

finalBtn.addEventListener('click', e => {
  const url = 'dashboard.html';
  window.open(url, '_self');
});
