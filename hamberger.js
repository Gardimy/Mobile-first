const hamberger = document.querySelector('.Hamberger');
const Mobilemenu = document.querySelector('.mobile-menu');
const Closebtn = document.querySelector('.Closebtn');


hamberger.addEventListener('click', function () {
	hamberger.classList.toggle('is-active');
	Mobilemenu.classList.toggle('is-active');
});

Closebtn.addEventListener('click', function() {
	option.style.top = '100%';
});
