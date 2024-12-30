// caching the form
const emailForm = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.getElementById('password');
const emailHelp = document.getElementById('emailHelp');

console.log(emailForm);

// 2. adding the event listener
// Common Events: Submit, Click, Change, Input
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // test
  console.log('Submitted');

  // grabbing form input values

  console.log({ email: email.value, password: password.value });

  reset()
});

const reset = () => {
  email.value = '';
  password.value = '';
  email.style.borderColor = '';
  password.style.borderColor = '';
  emailHelp.innerText = "We'll never share your email with anyone else.";
  emailHelp.style.color = 'grey';
};

email.addEventListener('input', validateEmail);

function validateEmail() {
  console.log('works');
  if (email.value.includes('@')) {
    email.style.borderColor = 'lightGreen';
    emailHelp.innerText = 'Success!';
    emailHelp.style.color = 'lightGreen';
  } else {
    email.style.borderColor = 'red';
    emailHelp.innerText = 'Not a valid email address!';
    emailHelp.style.color = 'red';
  }
}

password.addEventListener('input', () => {
  if (password.value.length < 6) {
    password.style.borderColor = 'red';
  } else {
    password.style.borderColor = 'lightGreen';
  }
});
