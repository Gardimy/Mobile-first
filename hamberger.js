const option = document.querySelector('.option');
const menu = document.querySelector('.hamberger');
const closemenu = document.querySelector('.Closebtn');

menu.addEventListener('click', () => {
  option.style.display = 'flex';
  menu.style.display = 'block';
});

function toggleMenu() {
  document.querySelector('.Closebtn');
}

closemenu.addEventListener('click', () => {
  option.style.top = '-100%';
  closemenu.style.display = 'none';
});
