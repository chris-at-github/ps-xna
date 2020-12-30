import { tns } from 'tiny-slider/src/tiny-slider';
import modal from 'micromodal';
import 'whatwg-fetch';

// ---------------------------------------------------------------------------------------------------------------------
// Bicycle Detail View
(function () {
	'use strict';

	xna.on('bicycleOpen', function() {
		modal.show('modal-1', {
			onShow: modal => console.info(`${modal.id} is shown`), // [1]
			onClose: modal => console.info(`${modal.id} is hidden`), // [2]
			openClass: 'is--modal-open' // [5]
		});
	});

	document.addEventListener('bicycleLoaded', function() {

		// Modal oeffnen
		modal.show('bicycle-modal', {
			onShow: function(modal) {

				// bei langen Modals immer ganz nach oben scrollen
				modal.scrollTop = 0;
			},
			onClose: modal => console.info(`${modal.id} is hidden`),
			openClass: 'is--modal-open' // [5]
		});

		var container = document.querySelector('#bicycle-modal .bicycle-record');

		container.querySelectorAll('.slider').forEach(function(node, index) {
			let slider = tns({
				container: node.querySelector('.slider--container'),
				items: 1,
				autoplay: false,
				controls: true,
				controlsContainer: node.querySelector('.slider--controls .slider--controls-inner'),
				nav: false,
				// navContainer: node.querySelector('.slider--navigation .container-inner ul'),
				onInit: function() {

					// CSS Lazyload durch setzen der Klasse slider--initialized
					node.classList.add('slider--initialized');
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
				document.querySelector('#bicycle-modal .bicycle-record').innerHTML = body;

				// HTML im Modal verarbeiten
				xna.fireEvent('bicycleLoaded');
			});
	});

	xna.on('documentLoaded', function() {
		document.querySelectorAll('.bicycle-listing--item').forEach(function(node, index) {
			node.addEventListener('click', function(event) {
				xna.fireEvent('bicycleOpen', {node: node});
				event.preventDefault();
			});
			// let uid = node.getAttribute('data-media-wall');
		});
	});
})();