'use strict';

const userName = document.querySelector('[data-username]');
const submitBtn = document.querySelector('[data-submit]');
const emailId = document.querySelector('[data-email]');
const NameOfUser = document.querySelector('[data-name]');
const password = document.querySelector('[data-password]');

const dataError = document.querySelector('[data-error]');
const signPage = document.querySelector('[signup-page]');
const profilePage = document.querySelector('[second-page]');
const featureData = document.querySelector('[feature-data]');
const checkBox = document.querySelector('.check');
profilePage.classList.add('hidden');
const character = document.querySelector('[character]');
const uppercase = document.querySelector('[uppercase]');
const lowercase = document.querySelector('[lowercase]');
const number = document.querySelector('[number]');
const special = document.querySelector('[special]');

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
  NameOfUser.value = '';
  password.value = '';
}

async function fetchUser() {
  const response = await fetch('./app/data.json');
  //   console.log(response);
  const data = await response.json();

  console.log(data);

  return data;
}

password.onkeyup = () => {
  console.log('function is called');
  var userPassword = password.value;

  var pattern = /[a-z]/g;

  if (userPassword.match(pattern)) {
    lowercase.classList.add('valid');
  } else {
    lowercase.classList.remove('valid');
  }

  pattern = /[A-Z]/g;

  if (userPassword.match(pattern)) {
    uppercase.classList.add('valid');
  } else {
    uppercase.classList.remove('valid');
  }

  pattern = /[0-9]/g;
  if (userPassword.match(pattern)) {
    number.classList.add('valid');
  } else {
    number.classList.remove('valid');
  }

  if (userPassword.length >= 6) {
    character.classList.add('valid');
  } else {
    character.classList.remove('valid');
  }

  pattern = /[!@#$%^&*()_+\=?]+/;

  if (userPassword.match(pattern)) {
    special.classList.add('valid');
  } else {
    special.classList.remove('valid');
  }
};

//submit button validation

submitBtn.addEventListener('click', async () => {
  const inputUserName = userName.value;
  const emailValue = emailId.value;
  console.log('password length', password.value.length);
  const data = await fetchUser();
  const value = emailValue.split('@');
  console.log(checkEmail(emailValue.split('@')));

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
      if (checkEmail(value)) {
        emailId.classList.remove('border');
      } else if (!checkEmail(value) || inputUserName == '') {
        emailId.classList.add('border');
        userName.classList.add('border');

        if (inputUserName !== '') {
          userName.classList.remove('border');
        }
      } else if (NameOfUser.value === '' || password.value.length < 6) {
        password.classList.add('border');
        NameOfUser.classList.add('border');
        console.log('hello at');

        if (NameOfUser.value !== '') {
          NameOfUser.classList.remove('border');
        }

        if (password.value.length < 6) {
          password.classList.add('border');
        }
      } else {
        password.classList.add('validBorder');
      }

      if (
        checkEmail(value) &&
        inputUserName.value !== '' &&
        checkBox.checked &&
        password.value.length >= 6
      ) {
        dataError.classList.add('hidden');
        emailId.classList.remove('border');
        userName.classList.remove('border');
        signPage.classList.add('hidden');
        profilePage.classList.remove('hidden');
      } else {
        checkBox.classList.add('border');
        password.classList.add('border');
      }
    }
  }
});

emptyBox();

function checkEmail(emailValue) {
  let n = emailValue.length;

  for (let i = 0; i < n; i++) {
    if (emailValue[i] === 'gmail.com') {
      return true;
    }
  }
  return false;
}

checkBox.checked = false;
