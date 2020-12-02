const GoogleMaps = require('../modules/googleMaps');

var map = new GoogleMaps('.map--container', {
	coordinates: {
		latitude: 47.7707053,
		longitude: 11.374101
	},
	zoom: 14
});

map.addMarkerType('default', map.MARKER_TYPE_SIMPLE, {
	url: 'https://www.radlfluesterer.de/svg/marker.svg',
	scaledSize: [48, 51],
	optimized: false
});

map.addMarker('default', {
	latitude: 47.7707053,
	longitude: 11.374101
});