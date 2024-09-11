
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

  const entries = [...formData.entries()];
  console.log(entries);
  const values = [...formData.values()];
  console.log(values);
  const keys = [...formData.keys()];
  console.log(keys);

    // iterate over with "for of" loop
  for (let [name, value] of formData) {
    console.log(`${name} = ${value}`);
  }
// output   
//   name = Sharathchandra
    // email = demo@example.com 
    // password = demo
  
});         