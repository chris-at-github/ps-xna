(function () {
	'use strict';



	xna.on('documentLoaded', function() {
		let body = document.querySelector('body');

		document.querySelectorAll('#header .navigation a').forEach(function(node) {
			node.addEventListener('click', function(event) {

				// nur bei geoeffneter Sidebar (mobil) auswerten
				if(document.body.classList.contains('is--sidebar-active') === true) {

					// Sidebar wieder ausblenden
					document.body.classList.remove('is--sidebar-active');

					// position: fixed sofort entfernen und nach Abschluss der Transition alle Klassen zur Animation entfernen
					document.body.classList.add('is--sidebar-closing');
					document.querySelector('#header .sidebar').addEventListener('transitionend', function() {
						document.body.classList.remove('is--sidebar-closing');
					});

					// Scrollbars ausblenden
					xna.fireEvent('scrolllock.toggle');
				}

				// gibt es ein Linkziel auf der Seite? -> dann springe es direkt an (animiert - 35 offset)
				let target = node.getAttribute('href');

				if(target.indexOf('#') === 0 && document.querySelector(target)) {
					setTimeout(function() {
						let y = (document.querySelector(target).getBoundingClientRect().x || document.querySelector(target).getBoundingClientRect().top) - 35; // IE 11 Fallback
						xna.scrollTo(y, 250);
					}, 50);

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