const accordionLimitEdition = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const accordions = document.querySelectorAll('.accordion-limit-edition__wrapp');

        if (accordions.length === 0) {
            return; // Salir si no hay elementos de acordeón
        }

        accordions.forEach(accordion => {
            const titleContainer = accordion.querySelector('.accordion-limit-edition__title-container');
            const panel = accordion.querySelector('.accordion-limit-edition__panel');
            const showIcon = accordion.querySelector('.accordion-limit-edition__show-ico');
			

            if (titleContainer && panel && showIcon) {
                titleContainer.addEventListener('click', () => {
                    // Cerrar todos los demás artículos
                    accordions.forEach(otherAccordion => {
                        if (otherAccordion !== accordion) {
                            const otherTitleContainer = otherAccordion.querySelector('.accordion-limit-edition__title-container');
                            const otherPanel = otherAccordion.querySelector('.accordion-limit-edition__panel');
                            const otherShowIcon = otherAccordion.querySelector('.accordion-limit-edition__show-ico');
                            otherTitleContainer.classList.remove('active');
                            otherPanel.classList.remove('active');
                            otherShowIcon.classList.remove('active');
                        }
                    });

                    // Abrir/cerrar el artículo actual
                    titleContainer.classList.toggle('active');
                    panel.classList.toggle('active');
                    showIcon.classList.toggle('active');
                });
            }
        });
    });
};

export default accordionLimitEdition;
