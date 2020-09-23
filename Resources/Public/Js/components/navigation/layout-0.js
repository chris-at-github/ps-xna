(function () {
	'use strict';

	console.log(1);

	xna.on('documentLoaded', function() {
		let body = document.querySelector('body');

		console.log(2);

		document.querySelectorAll('#header .hamburger').forEach(function(node) {
			node.addEventListener('click', function() {
				body.classList.toggle('is--sidebar-active');

				// Scrollbars ausblenden
				xna.fireEvent('scrolllock.toggle');
			}, false);
		});
	});
})();