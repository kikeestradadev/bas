const casinoSlider = () => { 
	document.addEventListener("DOMContentLoaded", function() {
		let casinoSlider = document.querySelector('.casino-slider'); 
		if (casinoSlider) {      
		const casinoSliderInstance = new Swiper('.casino-slider', {
			// Optional parameters
			direction: 'horizontal',
			loop: true, // Enable infinite loop
			allowThresholdMove: true,
			slidesPerView: 1, // Default to 1 slide per view
			spaceBetween: 7,
			autoplay: {
			delay: 3000, // Change slide every 3 seconds
			disableOnInteraction: false, // Continue autoplay after interaction
			},
			// Navigation arrows
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
			breakpoints: {
			// when window width is >= 640px

			640: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			960: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			// when window width is >= 1280px
			1280: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1440: {
				slidesPerView: 6,
				spaceBetween: 15,
			}
			}
		});
		}
	});
}

export default casinoSlider;
