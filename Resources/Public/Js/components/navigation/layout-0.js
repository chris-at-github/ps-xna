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