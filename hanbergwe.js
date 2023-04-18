const option = document.querySelector('.option');
const menu = document.querySelector('.hamberger');
const closemenu = document.querySelector('.Closebtn');

menu.addEventListener('click', () => {
  option.style.display = 'flex';
  menu.style.display = 'block';
  closemenu.style.display = 'block';
});

closemenu.addEventListener('click', () => {
  option.style.display = 'none';
  closemenu.style.display = 'none';
  menu.style.display = 'block';
});
