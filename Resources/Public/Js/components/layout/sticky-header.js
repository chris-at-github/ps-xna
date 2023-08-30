(function () {
	'use strict';

	xna.on('documentLoaded', function() {
		const bodyClass = 'is--sticky-header';

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

		document.addEventListener('stickyHeaderScrollToElement', function() {
			const stickyHeaderOffset= getComputedStyle(document.body).getPropertyValue('--sticky-header--offset');
			const targetElement = document.querySelector(window.location.hash);

			if(targetElement !== null && parseInt(stickyHeaderOffset) !== 0) {
				setTimeout(function() {
					window.scroll(0, (targetElement.offsetTop - parseInt(stickyHeaderOffset)));
				}, 0);
			}
		});

		xna.fireEvent('indicateToTopBodyClass');

		// Hash aus URL auslesen
		window.addEventListener('load', function() {
			if(window.location.hash !== '') {
				xna.fireEvent('stickyHeaderScrollToElement');
			}
		});
	});
})();