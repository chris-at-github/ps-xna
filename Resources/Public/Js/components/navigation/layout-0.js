(function () {
	'use strict';

	xna.on('documentLoaded', function() {
		let body = document.querySelector('body');

		document.querySelectorAll('#header .navigation a').forEach(function(node) {
			node.addEventListener('click', function(event) {
				if(document.body.classList.contains('is--sidebar-active') === true) {
					document.body.classList.add('is--sidebar-closing');
					document.body.classList.remove('is--sidebar-active');

					document.querySelector('#header .sidebar').addEventListener('transitionend', function() {
						document.body.classList.remove('is--sidebar-closing');
					});

					// Scrollbars ausblenden
					xna.fireEvent('scrolllock.toggle');
					event.preventDefault();
				}
			});
		});

		document.querySelectorAll('#header .hamburger').forEach(function(node) {
			node.addEventListener('click', function() {

				if(document.body.classList.contains('is--sidebar-active') === true) {
					document.body.classList.remove('is--sidebar-active');
					// xna.fireEvent('scrolllock.deactivate');

				} else {
					document.body.classList.add('is--sidebar-active');
				}

				// Scrollbars ausblenden
				xna.fireEvent('scrolllock.toggle');
			}, false);
		});
	});
})();