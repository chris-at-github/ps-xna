import { tns } from '../../../../../xo/Resources/Public/Js/vendors/tiny-slider';

// ---------------------------------------------------------------------------------------------------------------------
// Layout 01
(function () {
	'use strict';

	xna.on('documentLoaded', function() {
		document.querySelectorAll('.slider--layout-0').forEach(function(node, index) {
			let slider = tns({
				container:         node.querySelector('.slider--container'),
				items:             1,
				autoplay:          false,
				controls:          true,
				controlsContainer: node.querySelector('.slider--controls .container-inner'),
				nav:               true,
				navContainer:      node.querySelector('.slider--navigation .container-inner ul'),
				onInit:            function() {
					node.classList.add('slider--initialized');
				}
			});
		});
	});
})();