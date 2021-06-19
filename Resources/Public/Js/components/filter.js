import Filter from '../modules/filter';

(function () {
	'use strict';

	xna.on('documentLoaded', function() {
		if(document.querySelector('.product--listing') !== null) {
			let filter = new Filter(document.querySelector('.product--listing'), {
				ajax: true,
				pageType: 1548191072,
				containerSelector: '.card--container',
				itemsSelector: '.card'
			});
		}
	});
})();