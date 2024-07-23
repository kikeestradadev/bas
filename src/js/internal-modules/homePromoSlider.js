const homePromoSlider = () => { 
	document.addEventListener("DOMContentLoaded", function() {
		let homePromoSlider = document.querySelector('.home-promo-slider'); 
		if (homePromoSlider) {      
		const homePromoSliderInstance = new Swiper('.home-promo-slider', {
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
			// when window width is >= 1280px
			1280: {
				slidesPerView: 3,
				spaceBetween: 15,
			}
			}
		});
		}
	});
}

export default homePromoSlider;
