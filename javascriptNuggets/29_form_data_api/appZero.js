const form = document.querySelector('.form');
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    // check for empty values
    if (!nameValue || !emailValue || !passwordValue) {
      console.log('please provide values');
      return;
    }
    // do something
    console.log(nameValue, emailValue, passwordValue);
  
    // after that clear values
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
  });   

