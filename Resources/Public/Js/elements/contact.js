(function () {
	'use strict';

	xna.on('documentLoaded', function() {
		document.querySelectorAll('.ce-contact-search form').forEach(function(node, index) {
			node.addEventListener('submit', function(event) {
				let data = new FormData(node);
				let uri = node.getAttribute('action');

				fetch(uri, {
					body: data,
					method: 'post',
				}).then(function(response) {
						return response.text();

					}).then(function(body) {
						console.log(body);
					});

				event.preventDefault();
			});
		});
	});
})();