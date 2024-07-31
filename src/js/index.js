import topNav from './core-modules/topNav';
import basSlider from './internal-modules/basSlider';
import homePromoSlider from './internal-modules/homePromoSlider';
import bettingSlider from './internal-modules/bettingSlider'; 
import chooseSlider from './internal-modules/chooseSlider'; 
import casinoSlider from './internal-modules/casinoSlider'; 
import videoFilterSlider from './internal-modules/videoFilterSlider';
import buttonFilterSlider from './internal-modules/buttonFilterSlider';
import { initializeFilters } from './internal-modules/searchFilter';
import modalClose from './internal-modules/modalClose';


(() => {
	topNav(); 
	basSlider();
	homePromoSlider();
	bettingSlider();
	chooseSlider();
	casinoSlider();
	videoFilterSlider();
	buttonFilterSlider();
	modalClose();
	document.addEventListener('DOMContentLoaded', () => {
		initializeFilters();
	  });
})();
