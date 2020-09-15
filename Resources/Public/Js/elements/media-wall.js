import Tobii from 'tobii/src/js/tobii';

// ---------------------------------------------------------------------------------------------------------------------
// Layout 01
(function () {
	'use strict';

	xna.on('documentLoaded', function() {
		document.querySelectorAll('.media-wall--container').forEach(function(node, index) {
			let uid = node.getAttribute('data-media-wall');
			let lightbox = new Tobii({
				selector: '[data-media-wall="' + uid + '"] .media-wall--item',
				captionAttribute: 'title',
				counter: false,
				zoom: false,
				navLabel: ['Vorheriges Element', 'Nächstes Element'],
				closeLabel: 'Vollansicht schliessen',
				autoplayVideo: true
			});
		});
	});
})();