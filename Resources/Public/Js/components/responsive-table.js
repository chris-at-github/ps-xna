(function () {
	'use strict';

	xna.on('documentLoaded', function() {

		document.querySelectorAll('table').forEach(function(node, index) {
			let container = document.createElement('div');
				container.setAttribute('class', 'table--container');

			let fixedTable = node.cloneNode(true);
			let fixedContainer = document.createElement('div');
				fixedContainer.setAttribute('class', 'table--fixed-container');
				fixedContainer.appendChild(fixedTable);

			let scrollContainer = document.createElement('div');
				scrollContainer.setAttribute('class', 'table--scroll-container');

			// Container im DOM registrieren
			node.parentNode.insertBefore(container, node);

			// Elemente dem Container hinzufuegen
			container.appendChild(scrollContainer);
			container.appendChild(fixedContainer);
			scrollContainer.appendChild(node);

			let isXyz = false;
			let dragOffsetX = 0;
			let dragScrollX = 0;

			// Add the event listeners for mousedown, mousemove, and mouseup
			// fixedContainer.addEventListener('mousedown', e => {
			fixedContainer.addEventListener('touchstart', e => {
				isXyz = true;
				//dragOffsetX = e.offsetX;
				dragOffsetX = e.targetTouches[0].pageX;
				dragScrollX = scrollContainer.scrollLeft;
				console.log(dragScrollX);
			});

			// fixedContainer.addEventListener('mousemove', e => {
			fixedContainer.addEventListener('touchmove', e => {
				if(isXyz === true) {
					//scrollContainer.scrollLeft = dragScrollX - (e.offsetX - dragOffsetX);
					scrollContainer.scrollLeft = dragScrollX - (e.targetTouches[0].pageX - dragOffsetX);
					console.log(e.targetTouches[0].pageX);
				}
			});

			// window.addEventListener('mouseup', e => {
			window.addEventListener('touchend', e => {
				isXyz = false;
				//console.log(scrollContainer.scrollLeft);
				console.log(453);
			});
		});
	});
})();