'use strict';

signPage.classList.remove('hidden');
featureData.classList.add('hidden');
profilePage.classList.add('hidden');

const chooseImage = document.querySelector('choose-image');
const profilePic = document.getElementById('profile-pic');
const inputFile = document.getElementById('input-file');
const LocationData = document.querySelector('[data-location]');
const nextBtn = document.querySelector('#next-button');
const Error = document.querySelector('[error-null]');
const yourCharacter = document.querySelector('[character]');

inputFile.classList.add('hidden');

inputFile.onchange = function () {
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
};

nextBtn.addEventListener('click', () => {
  console.log(profilePic.src);
  var value = profilePic.src;
  const urlPart = value.split('/');
  console.log(`${value}`);
  console.log(checkUrl(urlPart));
  console.log('run it');

  if (checkUrl(urlPart)) {
    Error.style.border = '2px solid red';
  } else {
    featureData.classList.remove('hidden');
    profilePage.classList.add('hidden');
    let imageUrl = `${value}`;

    fetchImage(imageUrl)
      .then(response => {
        console.log('😄');
      })
      .catch(error => {
        console.log('😫');
      });
  }
});

LocationData.value = '';

function checkUrl(urlPart) {
  let target = 'Dribble';
  for (let i = 0; i < urlPart.length; i++) {
    if (urlPart[i] == target) {
      return true;
    }
  }
  return false;
}

console.log(yourCharacter.src);

async function fetchImage(imageUrl) {
  const response = await fetch(imageUrl);
  const data = await response.blob();

  yourCharacter.src = URL.createObjectURL(data);
}
