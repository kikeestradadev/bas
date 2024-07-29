const topNav = () => {
	document.addEventListener('DOMContentLoaded', () => {
		const hamburger = document.querySelector('.top-nav__hamburguer');
		const menuContainer = document.querySelector('.top-nav__menu-container');
		const openMenu = document.querySelector('.top-nav__hamburguer-open');
		const closeMenu = document.querySelector('.top-nav__hamburguer-close');
		const body = document.body;
	
		if (hamburger && menuContainer) {
			hamburger.addEventListener('click', () => {
				menuContainer.classList.toggle('active');
				body.classList.toggle('active');
				openMenu.classList.toggle('active');
				closeMenu.classList.toggle('active');
				console.log('Hamburger menu toggled');
			});
		} else {
			console.error('Hamburger or menu container not found');
		}
	});
};

export default topNav;
