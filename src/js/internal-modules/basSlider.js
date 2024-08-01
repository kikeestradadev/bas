const basSlider = () => {
    document.addEventListener("DOMContentLoaded", function() {
        let basSliderElement = document.querySelector('.bas-slider');
        if (basSliderElement) {
            const basSlider = new Swiper('.bas-slider', {
                effect: "slide",  // Cambiar el efecto a 'slide'
                speed: 800,
                autoHeight: true,
                watchOverflow: true,
                loop: true,  // Habilitar loop infinito
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                a11y: {
                    enabled: true,
                    slideLabelMessage: "Slide {{index}} of {{slidesLength}}",
                    slideRole: null,
                },
            });

            // Forzar actualización después de la carga completa de la página
            window.addEventListener('load', () => {
                basSlider.update();
            });

            // Forzar actualización después de un breve retraso
            setTimeout(() => {
                basSlider.update();
            }, 10);
        }
    });
}
export default basSlider;
