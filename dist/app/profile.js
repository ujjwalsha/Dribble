'use strict';

const chooseImage = document.querySelector('choose-image');
const profilePic = document.getElementById('profile-pic');
let inputFile = document.getElementById('input-file');

const LocationData = document.querySelector('[data-location]');
const nextBtn = document.querySelector('#next-button');
const Error = document.querySelector('[error-null]');
var yourCharacter = document.querySelectorAll('[character]');

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
    const url = 'feature.html';
    window.open(url, '_self');

    let imageUrl = `${value}`;
    console.log(imageUrl);
    fetchImage(profilePic.src)
      .then(response => {
        console.log('😄');
      })
      .catch(error => {
        console.error(error);
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

async function fetchImage(imageUrl) {
  const response = await fetch(imageUrl);
  console.log(response);
  const data = await response.blob();
  console.log(data);

  yourCharacter.forEach(e => {
    e.src = URL.createObjectURL(data);
  });
}
