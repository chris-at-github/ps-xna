import { tns } from '../../../../../xo/Resources/Public/Js/vendors/tiny-slider';

// ---------------------------------------------------------------------------------------------------------------------
// Layout 01
(function () {
	'use strict';

	document.querySelectorAll('.slider--layout-0').forEach(function(node, index) {
		let slider = tns({
			container: node.querySelector('.slider--container'),
			items: 1,
			autoplay: false,
			controls: true,
			controlsContainer: node.querySelector('.slider--controls .container-inner'),
			nav: true
		});
	});
})();