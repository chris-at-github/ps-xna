// No Scroll Kompontente fuer das Ausblenden der Scrollbars auf dem Body Element
// Feuert die Events noScrollActivate und noScrollDeactivate mit der entsprechenden Scrollbar-Breite und hoert auf das
// Event noScrollToggle um das Verhalten von ausserhalb zu steuern
(function () {
	'use strict';

	xna.on('documentLoaded', function() {

		document.addEventListener('scrolllock.toggle', function(event) {

			// Breite der Scrollbars ausrechnen
			let scrollbarWidth = window.innerWidth - document.body.clientWidth;
		});

	});
})();