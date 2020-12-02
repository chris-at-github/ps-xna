import { tns } from '../vendors/tiny-slider';

// ---------------------------------------------------------------------------------------------------------------------
// Layout 01
(function () {
	'use strict';

	xna.on('documentLoaded', function() {
		document.querySelectorAll('.ce-hero-slider').forEach(function(node, index) {
			let slider = tns({
				container: node.querySelector('.slider--container'),
				items: 1,
				autoplay: false,
				controls: true,
				controlsContainer: node.querySelector('.slider--controls .container-inner'),
				nav: true,
				navContainer: node.querySelector('.slider--navigation .container-inner ul'),
				onInit: function() {

					// CSS Lazyload durch setzen der Klasse slider--initialized
					node.querySelector('.slider').classList.add('slider--initialized');

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