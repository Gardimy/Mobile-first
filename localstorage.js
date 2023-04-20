const nameInput = document.getElementById('name');
const emailInput = document.getElementById('mail');
const entermessageInput = document.querySelector('.entermessage');

const formData = {
  name: nameInput.value,
  mail: emailInput.value,
  entermessage: entermessageInput.value,
};

const storedFormData = JSON.parse(localStorage.getItem('formData'));

<<<<<<< HEAD
if (storedFormData) {
  nameInput.value = storedFormData.name;
  emailInput.value = storedFormData.mail;
  entermessageInput.value = storedFormData.entermessage;
}

nameInput.addEventListener('input', () => {
  formData.name = nameInput.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

emailInput.addEventListener('input', () => {
  formData.mail = emailInput.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

entermessageInput.addEventListener('input', () => {
  formData.entermessage = entermessageInput.value;
  localStorage.setItem('formData', JSON.stringify(formData));
=======
  localStorage.setItem('formData', JSON.stringify(Object.fromEntries(formData.entries())));
>>>>>>> b292f8ba8a6b02846c97085c54824702fa4c2f6f
});