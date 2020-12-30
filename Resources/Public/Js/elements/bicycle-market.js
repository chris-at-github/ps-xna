import { tns } from 'tiny-slider/src/tiny-slider';
import modal from 'micromodal';

// ---------------------------------------------------------------------------------------------------------------------
// Bicycle Detail View
(function () {
	'use strict';

	xna.on('bicycleOpen', function() {
		modal.show('modal-1', {
			onShow: modal => console.info(`${modal.id} is shown`), // [1]
			onClose: modal => console.info(`${modal.id} is hidden`), // [2]
			openClass: 'is--modal-open' // [5]
		});
	});

	xna.on('bicycleLoaded', function() {
		document.querySelectorAll('.slider').forEach(function(node, index) {
			let slider = tns({
				container: node.querySelector('.slider--container'),
				items: 1,
				autoplay: false,
				controls: true,
				controlsContainer: node.querySelector('.slider--controls .slider--controls-inner'),
				nav: false,
				// navContainer: node.querySelector('.slider--navigation .container-inner ul'),
				onInit: function() {

					// CSS Lazyload durch setzen der Klasse slider--initialized
					node.classList.add('slider--initialized');
				}
			});
		});
	});
})();