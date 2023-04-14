const form = document.querySelector('form');
const email = document.getElementById('email');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = 'invalid';
    error.textContent = 'Vour email must not contain capital letters';
    error.className = 'error active';
  } 
});
