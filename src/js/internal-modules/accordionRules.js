const accordionRules = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const accordions = document.querySelectorAll('.accordion-rules__wrapp');

        if (accordions.length === 0) {
            return; // Salir si no hay elementos de acordeón
        }

        accordions.forEach(accordion => {
            const titleContainer = accordion.querySelector('.accordion-rules__title-container');
            const panel = accordion.querySelector('.accordion-rules__panel');

            if (titleContainer && panel) {
                titleContainer.addEventListener('click', () => {
                    // Verificar si el elemento actual está activo
                    const isActive = panel.classList.contains('active');

                    // Cerrar todos los demás artículos
                    accordions.forEach(otherAccordion => {
                        const otherTitleContainer = otherAccordion.querySelector('.accordion-rules__title-container');
                        const otherPanel = otherAccordion.querySelector('.accordion-rules__panel');
                        if (otherPanel !== panel) {
                            otherPanel.classList.remove('active');
                            otherTitleContainer.classList.remove('active');
                        }
                    });

                    // Abrir/cerrar el artículo actual
                    panel.classList.toggle('active');
                    titleContainer.classList.toggle('active');
                });
            }
        });
    });
};

export default accordionRules;
