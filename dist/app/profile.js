'use strict';

// signPage.classList.add('hidden');
featureData.classList.add('hidden');
profilePage.classList.add('hidden');

console.log('hello');

const chooseImage = document.querySelector('choose-image');
const profilePic = document.getElementById('profile-pic');
const inputFile = document.getElementById('input-file');
const LocationData = document.querySelector('[data-location]');
const nextBtn = document.querySelector('#next-button');
const Error = document.querySelector('[error-null]');

inputFile.classList.add('hidden');

inputFile.onchange = function () {
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
};

nextBtn.addEventListener('click', () => {
  console.log(profilePic.src);
  var value = profilePic.src;

  console.log(value);
  console.log(`${value}`);

  if (profilePic.src === 'http://127.0.0.1:5502/DRIBBLE1/dist/app.html') {
    Error.style.border = '2px solid red';
    console.log('hello');
  }

  if (
    profilePic.src == `blob: ${value}` &&
    value !== 'http://127.0.0.1:5502/DRIBBLE1/dist/app.html'
  ) {
    featureData.classList.remove('hidden');
    profilePage.classList.add('hidden');
  }
});

LocationData.value = '';
