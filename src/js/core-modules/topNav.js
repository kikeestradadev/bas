const topNav = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const menuItems = document.querySelectorAll('.top-nav__menu-li');
        const hamburguer = document.querySelector('.top-nav__hamburguer');
        const hamburguerOpen = document.querySelector('.hamburguer-open');
        const hamburguerClose = document.querySelector('.hamburguer-close');
        const menu = document.querySelector('.top-nav__menu');

        if (menuItems.length > 0) {
            menuItems.forEach(item => {
                const subMenu = item.querySelector('ul');
                const anchor = item.querySelector('.top-nav__menu-anchor');
                const anchorIcon = item.querySelector('.top-nav__menu-anchor-text');

                if (subMenu && anchor && anchorIcon) {
                    anchorIcon.classList.add('active'); 
                    item.classList.add('active'); // Añadir la clase 'active' al elemento li

                    anchor.addEventListener('click', (event) => {
                        event.preventDefault(); // Evita que el enlace funcione
                        subMenu.classList.toggle('active'); // Abre/cierra el submenú
                    });
                }
            });
        }

        if (hamburguer && hamburguerOpen && hamburguerClose && menu) {
            hamburguer.addEventListener('click', () => {
                hamburguerOpen.classList.toggle('close');
                hamburguerClose.classList.toggle('show');
                menu.classList.toggle('active'); // Agrega la clase active al ul
            });
        }
    });
};

export default topNav;
