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

			itemReduce: function(item, parent) {
				parent.setAttribute('aria-expanded', 'false');
			},

			itemBeforeExpand: function(item, parent) {

				// Erstellung Zurueck-Link
				if(parent.querySelector('.navigation-item--backlink') === null) {
					let back = document.createElement('li');

					back.classList.add('navigation-item--backlink');
					back.addEventListener('click', function() {
						navigation.itemReduce(back, parent);
					});

					let text = document.createElement('span');
					text.innerText = 'Zurück';

					back.append(text);
					parent.querySelector('ul').insertAdjacentElement('afterbegin', back);
				}
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

			node.querySelectorAll('li > a, li > span').forEach(function(item) {
				item.addEventListener('click', navigation.itemExpand);
			});
		});
	});
})();