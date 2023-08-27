(function () {
	'use strict';

	xna.on('documentLoaded', function() {
		let bodyClass = 'is--sticky-header';

		// Scroll Down|Up
		document.addEventListener('indicateToTopBodyClass', function() {
			if(window.scrollY > 0) {
				document.body.classList.add(bodyClass);

			} else {
				document.body.classList.remove(bodyClass);
			}
		});

		document.addEventListener('scroll', function(event) {
			xna.fireEvent('indicateToTopBodyClass');
		});

		xna.fireEvent('indicateToTopBodyClass');
	});
})();