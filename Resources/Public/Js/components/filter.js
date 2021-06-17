import Filter from '../modules/filter';

(function () {
	'use strict';

	xna.on('documentLoaded', function() {
		let filter = new Filter(document.querySelector('.product--listing'), {
			ajax: true,
			pageType: 1548191072,
			containerSelector: '.card--container',
			itemsSelector: '.card'
		});

		// let body = document.querySelector('body');
		//
		// document.querySelectorAll('#header .hamburger').forEach(function(node) {
		// 	node.addEventListener('click', function() {
		// 		body.classList.toggle('is--off-canvas-active');
		//
		// 		// Scrollbars ausblenden
		// 		xna.fireEvent('scrolllock.toggle');
		// 	}, false);
		// });
	});
})();