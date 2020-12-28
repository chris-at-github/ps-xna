import { tns } from "tiny-slider/src/tiny-slider"

// ---------------------------------------------------------------------------------------------------------------------
// Bicycle Detail View
(function () {
	'use strict';

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