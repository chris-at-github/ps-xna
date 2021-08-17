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

				// Erstellung Parent Link
				// als erstes -> Zurueck-Link wird ebenfalls an erster Stelle eingefuegt und verdraengt den Link
				if(parent.querySelector('.navigation-item--parentlink') === null) {
					parent.querySelector('ul').insertAdjacentElement('afterbegin', navigation.createParentLink(item, parent));
				}

				// Erstellung Zurueck Link
				if(parent.querySelector('.navigation-item--backlink') === null) {
					parent.querySelector('ul').insertAdjacentElement('afterbegin', navigation.createBackLink(item, parent));
				}
			},

			createBackLink: function(item, parent) {
				let backlink = document.createElement('li'),
					text = document.createElement('span'),
					svg = xna.createSvgUseElement('#sprite-arrow-left', {'viewBox': '0 0 14 11'});

				backlink.classList.add('navigation-item--backlink');
				backlink.addEventListener('click', function() {
					navigation.itemReduce(backlink, parent);
				});

				text.innerText = xna.l10n.navigation.prev;
				text.appendChild(svg);

				backlink.appendChild(text);

				return backlink;
			},

			createParentLink: function(item, parent) {
				let parentlink = document.createElement('li'),
					link = item.cloneNode(true),
					svg = xna.createSvgUseElement('#sprite-overview', {'viewBox': '0 0 11 12'});

				parentlink.classList.add('navigation-item--parentlink');

				link.removeChild(link.querySelector('svg'));

				// nur wenn das Elternelemet ein Link ist
				if(link.tagName.toLocaleLowerCase() === 'a') {
					link.appendChild(svg);
				}

				parentlink.appendChild(link);

				return parentlink;
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
				let parent = item.parentElement;


				item.addEventListener('click', navigation.itemExpand);

				if(parent.hasAttribute('aria-expanded') === true) {
					let svg = xna.createSvgUseElement('#sprite-chevron-right', {'viewBox': '0 0 6 12'});
					item.appendChild(svg);
				}
			});
		});
	});
})();