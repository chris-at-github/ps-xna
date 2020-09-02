// Icon Text Komponente
// Icon Text Elemente koennen Block-Level Elemente wie Ueberschriften aufnehmen, damit diese aber trotzdem komplett
// verlinkt werden koennen wird der Ziellink aus einem Data-Attribute ausgewertet
(function () {
	'use strict';

	xna.on('documentLoaded', function() {
		document.querySelectorAll('.icon-text[data-target]').forEach(function(node) {
			node.addEventListener('click', function(event) {
				document.location.href = node.dataset.target;
				event.preventDefault();
			});
		});
	});
})();