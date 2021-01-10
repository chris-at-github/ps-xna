(function () {
	'use strict';

	xna.on('documentLoaded', function() {
		document.addEventListener('contactSearchLoaded', function(event) {

			// Dokumenten-Klasse
			document.body.classList.add('is-contact-open');
			document.body.classList.remove('is-contact-loading');

			let container = event.detail.resultContainer;

			// Fertiges HTML in den vorbereiteten Container laden
			container.innerHTML = event.detail.responseBody;

			// Eltern-DIV auf die Groesse aufspannen
			container.parentElement.style.maxHeight = container.offsetHeight + 'px';
		});

		document.querySelectorAll('.ce-contact-search').forEach(function(node, index) {
			let form = node.querySelector('form');
			let resultContainer = node.querySelector('.contact-search--result-container');

			form.addEventListener('submit', function(event) {
				let data = new FormData(form);
				let uri = form.getAttribute('action');

				// Dokumenten-Klasse
				document.body.classList.add('is-contact-loading');

				fetch(uri, {
					body: data,
					method: 'post',
				}).then(function(response) {
						return response.text();

					}).then(function(body) {
						xna.fireEvent('contactSearchLoaded', {
							responseBody: body,
							resultContainer: resultContainer
						});
					});

				event.preventDefault();
			});
		});
	});
})();