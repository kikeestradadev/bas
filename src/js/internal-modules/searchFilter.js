const filterSelection = (c) => {
    // Limpiar el input cuando se selecciona un botón
    const inputElement = document.querySelector('.video-filter__controls-input');
    if (inputElement) {
        inputElement.value = ''; // Limpiar el input si existe
    }

    const items = document.querySelectorAll('.video-filter__content-grid-item');
    if (!items.length) return; // Salir si no hay elementos

    if (c === 'all') c = ''; // Mostrar todos si se selecciona 'all'
    items.forEach(item => {
        item.style.display = item.className.indexOf(c) > -1 ? 'block' : 'none'; // Mostrar u ocultar elementos basados en la clase
    });
};

const setupInputFilter = () => {
    const fnFilter = (inputElement, selectorContainer) => {
        inputElement.addEventListener('keyup', e => {
            if (e.key === 'Escape') e.target.value = ''; // Limpiar el campo de búsqueda con 'Escape'

            const activeButton = document.querySelector('.video-filter__controls-button.active');
            if (activeButton) {
                activeButton.classList.remove('active'); // Quitar clase activa del botón al usar el filtro de búsqueda
            }

            if (e.target.value === '') {
                const allButton = document.querySelector('.video-filter__controls-button[data-filter="all"]');
                if (allButton) {
                    allButton.classList.add('active'); // Activar el botón 'Show all' cuando el input esté vacío
                }
                filterSelection('all'); // Mostrar todos los elementos cuando el input esté vacío
            } else {
                fnCompareElements(e.target.value.toUpperCase(), selectorContainer);
            }
        });
    };

    const fnCompareElements = (filterText, selectorContainer) => {
        const searchContainers = document.querySelectorAll(selectorContainer);

        searchContainers.forEach(container => {
            const title = container.querySelector('.video-filter__content-grid-item-title');
            const subTitle = container.querySelector('.video-filter__content-grid-item-sub-title');
            let textContent = '';

            if (title) textContent += title.textContent.toUpperCase() + ' ';
            if (subTitle) textContent += subTitle.textContent.toUpperCase();

            const searchTerms = filterText.split(' ');  // Divide el texto en palabras separadas por espacios

            // Verificar si todas las palabras de búsqueda están presentes en el contenido del texto
            const isMatch = searchTerms.every(term => textContent.includes(term));

            container.style.display = isMatch ? 'block' : 'none'; // Mostrar u ocultar elementos basados en el texto
        });
    };

    const inputElement = document.querySelector('.video-filter__controls-input');
    if (inputElement) {
        fnFilter(inputElement, '.video-filter__content-grid-item'); // Configurar evento de búsqueda
    }
};

const setupButtonFilters = () => {
    const btnContainer = document.getElementById('myBtnContainer');
    if (!btnContainer) return; // Salir si no se encuentra el contenedor de botones

    const btns = btnContainer.getElementsByClassName('video-filter__controls-button');
    if (!btns.length) return; // Salir si no hay botones

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            const current = document.getElementsByClassName('active');
            if (current.length > 0) {
                current[0].className = current[0].className.replace(' active', ''); // Quitar clase activa de los botones previos
            }
            this.className += ' active'; // Agregar clase activa al botón clickeado
            filterSelection(this.getAttribute('data-filter')); // Aplicar filtro basado en el data-filter
        });
    }
};

// Nueva función que inicializa todo
const initializeFilters = () => {
    setupInputFilter();
    setupButtonFilters();
    filterSelection('all'); // Mostrar todos los elementos por defecto
};

// Exportamos la función inicializadora y las otras funciones si las necesitas
export { setupInputFilter, setupButtonFilters, initializeFilters };
