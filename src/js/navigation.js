const navigationContainer = document.querySelector('.header__container-nav');
const menuButton = document.querySelector('.header__menu-button');
const navigationLinks = document.querySelectorAll('.header__nav .header__link');

const closeNavigation = () => {
	navigationContainer.classList.remove('is-open');
	menuButton.setAttribute('aria-expanded', 'false');
	menuButton.setAttribute('aria-label', 'Open navigation menu');
};

menuButton.addEventListener('click', () => {
	const isOpen = navigationContainer.classList.toggle('is-open');

	menuButton.setAttribute('aria-expanded', String(isOpen));
	menuButton.setAttribute(
		'aria-label',
		isOpen ? 'Close navigation menu' : 'Open navigation menu',
	);
});

navigationLinks.forEach(link => {
	link.addEventListener('click', closeNavigation);
});

window.addEventListener('resize', () => {
	if (window.innerWidth >= 992) {
		closeNavigation();
	}
});
