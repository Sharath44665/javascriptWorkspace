
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');


const form = document.querySelector('.form');
// also valid approach
// const formData = new FormData(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  // won't directly return values
  console.log(formData);

  const name = formData.get('name');
  console.log(name);
  // append
  formData.append('test', 'test');
  // delete
//   formData.delete('test');
  formData.delete('email');
  // check property
  const checkName = formData.has('name');
  console.log(checkName);

  const entries = [...formData.entries()];
  console.log(entries);

  // it's not JSON so....(depends on the server)
  axios.post('someUrl', formData);

  const formObject = Object.fromEntries(formData);
  console.log(formObject);
  // will work
  axios.post('someUrl', formObject);

  // reset
  e.currentTarget.reset();  
  
});         