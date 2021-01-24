(function () {
	'use strict';

	xna.on('documentLoaded', function() {
		let bodyClass = 'is--search-widget',
			trigger = document.querySelector('.search-widget--link'),
			field = document.querySelector('.search-widget--keyword'),
			close = document.querySelector('.search-widget--close');

		document.addEventListener('searchWidgetActivate', function() {
			document.body.classList.add(bodyClass);

			// Focus auf Inputfeld setzen
			field.focus();
		});

		document.addEventListener('searchWidgetDeactivate', function() {
			document.body.classList.remove(bodyClass);
		});

		trigger.addEventListener('click', function(event) {
			if(document.body.classList.contains(bodyClass) === false) {
				xna.fireEvent('searchWidgetActivate');
			}

			event.preventDefault();
		});

		close.addEventListener('click', function(event) {
			xna.fireEvent('searchWidgetDeactivate');
			event.preventDefault();
		});

		document.addEventListener('keydown', function(event) {
			if(event.code === 'Escape' && document.body.classList.contains(bodyClass) === true) {
				xna.fireEvent('searchWidgetDeactivate');
			}
		})
	});
})();