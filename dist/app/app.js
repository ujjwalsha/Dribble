'use strict';

const userName = document.querySelector('[data-username]');
const submitBtn = document.querySelector('[data-submit]');
const emailId = document.querySelector('[data-email]');
const dataOther = document.querySelectorAll('[data-other]');
const dataError = document.querySelector('[data-error]');
const signPage = document.querySelector('[signup-page]');
const profilePage = document.querySelector('[second-page]');
const featureData = document.querySelector('[feature-data]');

profilePage.classList.add('hidden');

fetchUser()
  .then(response => {
    console.log('yeah');
  })
  .catch(error => {
    console.log('🙁');
  });

function emptyBox() {
  userName.value = '';
  emailId.value = '';

  dataOther.forEach(e => {
    e.value = '';
  });
}

async function fetchUser() {
  const response = await fetch('./dist/app/data.json');
  //   console.log(response);
  const data = await response.json();

  console.log(data);

  return data;
}

//submit button validation

submitBtn.addEventListener('click', async () => {
  const inputUserName = userName.value;
  const emailValue = emailId.value;

  const data = await fetchUser();
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    if (data[i].username === inputUserName) {
      userName.classList.add('border');
      dataError.classList.remove('hidden');

      if (data[i].email === emailValue) {
        emailId.classList.add('border');
        dataError.classList.remove('hidden');
      }
      break;
    } else {
      if (userName.value === '' || emailId.value === '') {
        profilePage.classList.add('hidden');
        showError();
      } else {
        dataError.classList.add('hidden');
        emailId.classList.remove('border');
        userName.classList.remove('border');
        signPage.classList.add('hidden');
        profilePage.classList.remove('hidden');
      }
    }
  }
});

emptyBox();

function showError() {
  userName.classList.add('border');
  emailId.classList.add('border');
  dataOther.forEach(e => {
    e.classList.add('border');
  });
}
