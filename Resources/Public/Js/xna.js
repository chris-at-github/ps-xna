// ---------------------------------------------------------------------------------------------------------------------
// Elements
const Tobi = require('../../../../xo/Resources/Public/Js/vendors/tobi');
const Gallery = new Tobi({
	selector: '.gallery--image',
	captionAttribute: 'title',
	counter: false,
	zoom: false,
	navLabel: ['Vorheriges Bild', 'Nächstes Bild'],
	closeLabel: 'Bildansicht schliessen'
});