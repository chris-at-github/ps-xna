(function () {
	'use strict';

	xna.on('documentLoaded', function() {
		document.addEventListener('CeGallery_BeforeSliderInitialize', function(event) {

			if(document.querySelector('.ce-frame--layout-1 .ce-frame--inner') !== null) {

				// ce-frame--layout-1 = Element mit Standardeinrueckung -> um die Einrueckung von links zu ermitteln
				let rect = document.querySelector('.ce-frame--layout-1 .ce-frame--inner').getBoundingClientRect();
				let container = event.detail.node.querySelector('.slider--container');

				// Einrueckung nach links anpassen und gleichen Wert auf das letzte Element als Padding setzen -> Slider kann
				// die Breite wg. Margin nicht korrekt berechnen und wuerde den Slider hinten um rect.left abschneiden
				container.style.marginLeft = rect.left + 'px';
				container.lastChild.style.paddingRight = rect.left + 'px';
			}
		});

		document.addEventListener('CeGallery_AfterSliderInitialize', function(event) {

			let reference = document.querySelector('.ce-frame--layout-1 .ce-frame--inner');
			let container = event.detail.node.querySelector('.slider--container');
			let slider = event.detail.slider;
			var waiter = false;

			if(reference !== null) {
				window.addEventListener('resize', function() {
					if(waiter === false) {
						waiter = true;

						setTimeout(function() {
							let rect = reference.getBoundingClientRect();

							container.style.marginLeft = rect.left + 'px';
							container.lastChild.style.paddingRight = rect.left + 'px';

							slider.refresh();

							waiter = false;
						}, 50);
					}
				});
			}
		});
	});
})();