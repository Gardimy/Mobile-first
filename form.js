const form = document.querySelector('form');
const email = document.getElementById('email');
const error = email.nextElementSibling;
const emailRegExp = /^[a-z-0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z-0-9-]+(?:\.[a-z-0-9-]+)*$/;
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = 'invalid';
    error.textContent = 'Your email must not contain capital letters';
    error.className = 'error active';
  } else {
    email.className = 'valid';
    error.textContent = '';
    error.className = 'error';
    form.submit();
  }
});
