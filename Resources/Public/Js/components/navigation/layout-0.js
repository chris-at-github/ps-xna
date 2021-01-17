(function () {
	'use strict';

	xna.on('documentLoaded', function() {

		let navigation = {
			isEnabled: function() {
				return document.body.classList.contains('is--off-canvas-active');
			},

			itemExpand: function(event) {
				let item = this;
				let parent = item.parentElement;

				// nur wenn es Kind Elemente gibt und die mobile Navigation aktiv ist
				if(navigation.isEnabled() === true && parent.hasAttribute('aria-expanded') === true) {

					if(parent.getAttribute('aria-expanded') === 'false') {

						// Backlink und Direktlink einbinden
						navigation.itemBeforeExpand(item, parent);

						parent.setAttribute('aria-expanded', 'true');
					}

					event.preventDefault();
				}
			},

			itemBeforeExpand: function(item, parent) {
			}
		};

		document.querySelectorAll('.main-navigation').forEach(function(node) {

			// alle Navigationspunkte nach Typ kennzeichen (Direktlink / Unternavigation)
			node.querySelectorAll('li').forEach(function(item) {

				// hat mindestens Unterelement
				if(item.querySelector('ul') !== null) {
					item.classList.add('navigation-item--expandable');
					item.setAttribute('aria-expanded', false);

				} else {
					item.classList.add('navigation-item--link');
				}
			});

			node.querySelectorAll('a').forEach(function(item) {
				item.addEventListener('click', navigation.itemExpand);
			});
		});
	});
})();