import { tns } from 'tiny-slider/src/tiny-slider';
import modal from 'micromodal';
import 'whatwg-fetch';

// ---------------------------------------------------------------------------------------------------------------------
// Bicycle Detail View
(function () {
	'use strict';

	document.addEventListener('bicycleClosing', function() {

		// Dokumenten-Klasse
		document.body.classList.add('is--modal-closing');
		document.body.classList.remove('is--modal-open');

		setTimeout(function() {
			xna.fireEvent('bicycleClosed');
		}, 750);
	});

	document.addEventListener('bicycleClosed', function() {

		// Dokumenten-Klasse
		document.body.classList.remove('is--modal-closing');

		// Scrollbars einblenden
		xna.fireEvent('scrolllock.toggle');

		// Modal leeren
		document.querySelector('#bicycle-modal .modal').innerHTML = '';
	});

	document.addEventListener('bicycleLoaded', function() {

		// Scrollbars ausblenden
		xna.fireEvent('scrolllock.toggle');

		// Dokumenten-Klasse
		document.body.classList.add('is--modal-open');

		// Modal oeffnen
		modal.show('bicycle-modal', {
			onShow: function(modal) {

				// bei langen Modals immer ganz nach oben scrollen
				modal.scrollTop = 0;
			},
			onClose: function() {
				xna.fireEvent('bicycleClosing');
			}
		});

		var container = document.querySelector('#bicycle-modal .modal');

		container.querySelectorAll('.bicycle-modal--image').forEach(function(node, index) {
			let slider = tns({
				container: node.querySelector('.slider--container'),
				items: 1,
				autoplay: false,
				controls: true,
				controlsContainer: node.querySelector('.slider--controls .slider--controls-inner'),
				nav: true,
				navContainer: node.querySelector('.slider--navigation .slider--navigation-inner ul'),
				onInit: function() {

					// CSS Lazyload durch setzen der Klasse slider--initialized
					node.querySelector('.slider').classList.add('slider--initialized');
				}
			});
		});
	});

	document.addEventListener('bicycleOpen', function(event) {
		let node = event.detail.node;
		let uri = node.getAttribute('data-target-uri');

		fetch(uri)
			.then(function(response) {
				return response.text();
			})
			.then(function(body) {

				// Modal fuellen
				document.querySelector('#bicycle-modal .modal').innerHTML = body;

				// HTML im Modal verarbeiten
				xna.fireEvent('bicycleLoaded');
			});
	});

	xna.on('documentLoaded', function() {
		document.querySelectorAll('.bicycle-item').forEach(function(node, index) {
			node.addEventListener('click', function(event) {
				xna.fireEvent('bicycleOpen', {node: node});
				event.preventDefault();
			});
			// let uid = node.getAttribute('data-media-wall');
		});
	});

	xna.on('modalTest', function() {
		xna.fireEvent('bicycleLoaded');
	});
})();