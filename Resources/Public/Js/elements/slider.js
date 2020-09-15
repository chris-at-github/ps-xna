import { tns } from '../vendors/tiny-slider';

// ---------------------------------------------------------------------------------------------------------------------
// Layout 01
(function () {
	'use strict';

	xna.on('documentLoaded', function() {
		document.querySelectorAll('.slider--layout-0').forEach(function(node, index) {

			let controlsContainer = node.querySelector('.slider--controls .container-inner');

			let slider = tns({
				container: node.querySelector('.slider--container'),
				items: 1,
				autoplay: false,
				controls: true,
				controlsContainer: controlsContainer,
				nav: true,
				navContainer: node.querySelector('.slider--navigation .container-inner ul'),
				onInit: function() {

					// CSS Lazyload durch setzen der Klasse slider--initialized
					node.classList.add('slider--initialized');

					// Hx-Tags in geklonten Slider Elementen entfernen
					node.querySelectorAll('.tns-slide-cloned .slider--item-title').forEach(function(title) {
						if(title.innerHTML.match(/<h[0-9]>/gm) !== null) {
							title.innerHTML = title.innerText;
						}
					});
				}
			});
		});
	});
})();