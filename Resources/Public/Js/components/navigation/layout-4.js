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
				let backlink = document.createElement('li');

				backlink.classList.add('navigation-item--backlink');
				backlink.addEventListener('click', function() {
					navigation.itemReduce(backlink, parent);
				});

				let text = document.createElement('span');
				text.innerText = xna.l10n.navigation.prev;

				backlink.append(text);

				return backlink;
			},

			createParentLink: function(item, parent) {
				let parentlink = document.createElement('li');
				parentlink.classList.add('navigation-item--parentlink');

				let link = item.cloneNode(true);


				let svg = document.createElement('svg');
				svg.setAttribute('viewBox', '0 0 11 12');

				let use = document.createElement('use');
				use.setAttribute('xlink:href', '#sprite-navigation-parentlink');

				// @see: https://florianbrinkmann.com/svg-use-element-javascript-5315/
				var svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
					useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');

				useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#sprite-navigation-parentlink');
				svgElem.appendChild(useElem);
				svgElem.setAttribute('viewBox', '0 0 11 12');

				//svg.appendChild(use);
				link.appendChild(svgElem);
				parentlink.append(link);

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
				item.addEventListener('click', navigation.itemExpand);
			});
		});
	});
})();