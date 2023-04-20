const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const formData = new FormData(form);
  
  localStorage.setItem('formData', JSON.stringify(Object.fromEntries(formData.entries())));
});
