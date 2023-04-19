const form = document.querySelector('form');
const mail = document.getElementById('mail');

const warning = mail.nextElementSibling;
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = mail.value.length === 0 || emailRegExp.test(mail.value);
  if (!isValid) {
    mail.className = 'invalid';
    warning.textContent = 'Please enter a valid email address" (The email must not contain capital letters!!!)';
    warning.className = 'warning active';
  } 
});