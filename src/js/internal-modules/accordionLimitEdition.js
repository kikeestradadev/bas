const accordionLimitEdition = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const accordions = document.querySelectorAll('.accordion-limit-edition__wrapp');

        if (accordions.length === 0) {
            return; // Salir si no hay elementos de acordeón
        }

        accordions.forEach(accordion => {
            const titleContainer = accordion.querySelector('.accordion-limit-edition__title-container');
            const panel = accordion.querySelector('.accordion-limit-edition__panel');
            const titleContainerItem2 = accordion.querySelector('.accordion-limit-edition__title-container-item:nth-child(2)');
            const showLabel = accordion.querySelector('.accordion-limit-edition__show-label');

            if (titleContainer && panel && titleContainerItem2 && showLabel) {
                titleContainer.addEventListener('click', () => {
                    // Verificar si el elemento actual está activo
                    const isActive = titleContainer.classList.contains('active');

                    // Cerrar todos los demás artículos
                    accordions.forEach(otherAccordion => {
                        if (otherAccordion !== accordion) {
                            const otherTitleContainer = otherAccordion.querySelector('.accordion-limit-edition__title-container');
                            const otherPanel = otherAccordion.querySelector('.accordion-limit-edition__panel');
                            const otherTitleContainerItem2 = otherAccordion.querySelector('.accordion-limit-edition__title-container-item:nth-child(2)');
                            const otherShowLabel = otherAccordion.querySelector('.accordion-limit-edition__show-label');

                            otherTitleContainer.classList.remove('active');
                            otherPanel.classList.remove('active');
                            otherTitleContainerItem2.classList.remove('active');
                            otherShowLabel.classList.remove('active');
                            otherShowLabel.textContent = 'Show More';
                        }
                    });

                    // Abrir/cerrar el artículo actual
                    titleContainer.classList.toggle('active');
                    panel.classList.toggle('active');
                    titleContainerItem2.classList.toggle('active');
                    showLabel.classList.toggle('active');
                    showLabel.textContent = isActive ? 'Show More' : 'Show Less';
                });
            }
        });
    });
};

export default accordionLimitEdition;
