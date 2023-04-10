const hamberger = document.querySelector('.Hamberger');
const Mobilemenu = document.querySelector('.mobile-menu');

hamberger.addEventListener('click', () => {
  hamberger.classList.toggle('is-active');
  Mobilemenu.classList.toggle('is-active');
});
