// Icon Text Komponente
// Icon Text Elemente koennen Block-Level Elemente wie Ueberschriften aufnehmen, damit diese aber trotzdem komplett
// verlinkt werden koennen wird der Ziellink aus einem Data-Attribute ausgewertet
(function () {
	'use strict';

	xna.on('documentLoaded', function() {
		document.querySelectorAll('.hamburger').forEach(function(node) {
			node.addEventListener("click", function() {
				this.classList.toggle("is-active");
			}, false);
		});
	});
})();