'use strict';

signPage.classList.remove('hidden');
profilePage.classList.add('hidden');
featureData.classList.add('hidden');
const backBtn = document.querySelector('[back-button]');
const optionBox = document.querySelectorAll('.image');
const selectedTab = document.querySelectorAll('.fa-solid');
const finalBtn = document.querySelector('.final');
const dashboardSection = document.querySelector('.dashboard');

dashboardSection.classList.add('hidden');

selectedTab.forEach(e => {
  // e.classList.add('hidden');
  e.style.display = 'none';
});

backBtn.addEventListener('click', () => {
  profilePage.classList.remove('hidden');
});

let flag = false;

optionBox.forEach(e => {
  1000;
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
  dashboardSection.classList.remove('hidden');
  featureData.classList.add('hidden');
});
