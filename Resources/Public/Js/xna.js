// ---------------------------------------------------------------------------------------------------------------------
// Elements
// const Tobi = require('../../../../xo/Resources/Public/Js/vendors/tobi');
//
// let galleries = document.getElementsByClassName('gallery');
//
// if(galleries.length !== 0) {
// 	Array.prototype.forEach.call(galleries, function(gallery, index, array) {
// 		let uid = gallery.getAttribute('data-gallery-uid');
// 		let lightbox = new Tobi({
// 			selector: '[data-gallery-uid="' + uid + '"] .gallery--image',
// 			captionAttribute: 'title',
// 			counter: false,
// 			zoom: false,
// 			navLabel: ['Vorheriges Bild', 'Nächstes Bild'],
// 			closeLabel: 'Bildansicht schliessen'
// 		});
// 	});
// }

//require('../../../../xo/Resources/Public/Js/components/validation/phone');


// ---------------------------------------------------------------------------------------------------------------------
// Helper
require('./helpers/foreach');
require('./helpers/getcssproperty');

// ---------------------------------------------------------------------------------------------------------------------
// Components
require('./components/icon-text');
require('./components/scroll-lock');
require('./components/navigation/layout-0');

// ---------------------------------------------------------------------------------------------------------------------
// Elements
require('./elements/google-map');
require('./elements/slider');
require('./elements/media-wall');
