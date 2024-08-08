const topNav = () => {
	document.addEventListener('DOMContentLoaded', () => {
		const menuItems = document.querySelectorAll('.top-nav__menu-li');

		if (menuItems.length > 0) {
			menuItems.forEach(item => {
				const hasSubMenu = item.querySelector('ul');
				const anchorIcon = item.querySelector('.top-nav__menu-anchor-text-ico');

				if (hasSubMenu && anchorIcon) {
					anchorIcon.classList.add('active');
				}
			});
		}
	});
};

export default topNav;
