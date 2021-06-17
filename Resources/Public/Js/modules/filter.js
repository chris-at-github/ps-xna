const filter = function(element, options) {
	let _ = this;

	_.element = element;
	_.form = null;
	_.resetContainer = null;
	_.options = {};
	_.defaults = {
		paginatorSelector: '.f3-widget-paginator',
		ajax: false,
		ajaxSelectData: null,
		beforeSubmitProcess: null,
		afterSubmitProcess: null,
		afterProcessItem: null,
		submitSelector: '.filter--submit',
		autoSubmitSelector: '.filter-item--auto-submit',
		formSelector: 'form',
		filterItemSelector: '.filter-item',
		containerSelector: null,
		resetAllSelector: '.filter-reset--all',
		animationDuration: 250,
		pageType: 0
	}

	_.initialize(options);

	return {
	}
}

filter.prototype.initialize = function(options) {
	let _ = this;

	_.options = Object.assign(_.defaults, options);
	_.form = _.element.querySelector(_.options.formSelector);

	// // Read Hash
	// this.readHash();



	// hier nur weitermachen wenn die Suche ueberhaupt per Ajax abgeschickt werden soll
	if(_.options.ajax === true) {
		// $(this.options.submitSelector, this.element).on('click', function(e) {
		// 	_.submitItem($(this).closest(_.options.filterItemSelector), null);
		// 	e.preventDefault();
		// });
		//
		_.form.addEventListener('submit', function(event) {
			// $('input', this.form).each(function() {
			// 	var input = $(this);
			//
			// 	if(input.closest('.filter-item--resettable').length !== 0) {
			// 		_.processResetItem(input);
			// 	}
			// });

			_.submit();
			event.preventDefault();
		});

	} else {

		// // This is for 'Standorte'. Not Ajax. Everytime the request is sent, it goes through initialize again. I'm adding parameters to this whole path
		// _.writeHash();
	}

	// // Auto-Submit Formularelemente verarbeiten
	// $(this.options.autoSubmitSelector, this.element).each(function() {
	// 	$('label', $(this)).on('touchstart', function(e) {
	// 		$(this).closest(_.options.filterItemSelector).addClass('filter-item--touch');
	// 	});
	//
	// 	$(':input', $(this)).on('change', function(e) {
	// 		_.submitItem($(this).closest(_.options.filterItemSelector), $(this));
	// 		_.submit();
	// 	});
	// });

	// // Reset All Button verarbeiten
	// var resetAll = $(this.options.resetAllSelector, this.element);
	// resetAll.on('click', $.proxy(this.resetAll, this));
	//
	// // Reset Button Container erzeugen
	// this.resetContainer = $('<div class="filter-reset--container"></div>');
	//
	// // Wenn es einen Reset All Button gibt, fuege die Einzel Reset Buttons davor ein, ansonsten am Ende vom Formular
	// if(resetAll.length !== 0) {
	// 	this.resetContainer.insertBefore(resetAll);
	// 	resetAll.appendTo(this.resetContainer);
	//
	// } else {
	// 	this.form.append(this.resetContainer);
	// }

	// Callbacks aus den Options uebernehmen
	if(typeof(_.options.beforeSubmitProcess) === 'function') {
		_.beforeSubmitProcess = _.options.beforeSubmitProcess;
	}

	if(typeof(_.options.afterSubmitProcess) === 'function') {
		_.afterSubmitProcess = _.options.afterSubmitProcess;
	}

	if(typeof(_.options.afterProcessItem) === 'function') {
		_.afterProcessItem = _.options.afterProcessItem;
	}

	// // Reset Buttons erzeugen
	// $('input', this.form).each(function() {
	// 	var input = $(this);
	//
	// 	if(input.closest('.filter-item--resettable').length !== 0) {
	// 		_.processResetItem(input);
	// 	}
	// });
	// this.processResetAllButton();
}

filter.prototype.submit = function(event) {
	var _ = this;

	_.beforeSubmitProcess();
	// _.processResetAllButton();
	// _.writeHash();

	// Filter automatisch ueber Ajax verarbeiten
	if(_.options.ajax === true) {

		let data = new FormData(_.form);
		let uri = _.form.getAttribute('action');

		if(_.options.pageType !== 0) {
			uri = xna.addQueryString(uri, 'type', _.options.pageType);
		}

		// // Dokumenten-Klasse
		// document.body.classList.add('is-contact-loading');
		//
		fetch(uri, {
			body: data,
			method: 'post',
		}).then(function(response) {
			return response.text();

		}).then(function(body) {

			// xna.fireEvent('contactSearchLoaded', {
			// 	responseBody: body,
			// 	resultContainer: resultContainer
			// });
		});

		// $.ajax({
		// 	cache: false,
		// 	url: _.form.attr('action'),
		// 	data: _.form.serializeArray()
		// }).done(function(html) {
		// 	html = _.selectAjaxData(html);
		// 	_.processPaginator(html);
		//
		// 	if(_.options.masonry !== null) {
		// 		_.processMasonaryItems(html, false);
		//
		// 	} else {
		// 		_.processAjaxData(html, false);
		// 	}
		//
		// 	_.afterSubmitProcess();
		// });

		// lokale Verarbeitung der Filter
	} else if(_.options.local === true) {
		_.afterSubmitProcess();

		// Formular absenden
	} else {
		this.form.submit();
	}

	if(typeof(event) !== 'undefined') {
		event.preventDefault();
	}
};

filter.prototype.beforeSubmitProcess = function() {
};

filter.prototype.afterSubmitProcess = function() {
};

export default filter;

// ;(function(factory) {
// 	'use strict';
// 	if(typeof define === 'function' && define.amd) {
// 		define([], factory);
// 	} else if(typeof exports !== 'undefined') {
// 		module.exports = factory();
// 	} else {
// 		factory();
// 	}
// }(function() {
// 	var Filter = function(element, index, options) {
// 		var _ = this;
//
// 		_.element = element;
// 		_.index = index;
// 		_.form = null;
// 		_.resetContainer = null;
// 		_.options = {};
// 		_.initialize(options);
// 		// _.lazyload();
//
// 		// _.defined = false;
// 		//
// 		// _.maps = [];
// 		//
// 		// _.selector = selector;
// 		//
// 		// _.markerTypes = {};
// 		//
// 		// _.defaults = {
// 		// 	zoom: 10,
// 		// 	coordinates: {
// 		// 		latitude: 0.0,
// 		// 		longitude: 0.0
// 		// 	},
// 		// 	controls: {
// 		// 		zoom: true,
// 		// 		mapType: false,
// 		// 		scale: true,
// 		// 		streetView: false,
// 		// 		rotate: false,
// 		// 		fullscreen: false
// 		// 	}
// 		// };
// 		//
// 		// _.options = Object.assign(_.defaults, options);
// 		//
// 		// _.initialize();
// 	};
//
// 	//
// 	// GoogleMaps.prototype.MARKER_TYPE_SIMPLE = 'simple';
//
// 	Filter.prototype.initialize = function(options) {
// 		var _ = this;
//
// 		console.log(_);
//
// 		// var _ = this;
// 		//
// 		// this.options = $.extend(true, {}, this.default, options);
// 		// this.form = $(this.options.formSelector, this.element);
// 		//
// 		// // Read Hash
// 		// this.readHash();
// 		//
// 		// // Modals auswerten
// 		// $(this.options.itemModalSelector, this.element).each(function() {
// 		// 	var item = $(this).closest(_.options.filterItemSelector);
// 		// 	var modal = $(this).remodal({
// 		// 		appendTo: item
// 		// 	});
// 		//
// 		// 	$(_.options.submitSelector, this).on('click', function() {
// 		// 		modal.close();
// 		// 	});
// 		// });
// 		//
// 		// // hier nur weitermachen wenn die Suche ueberhaupt per Ajax abgeschickt werden soll
// 		// if(this.options.ajax === true) {
// 		// 	$(this.options.submitSelector, this.element).on('click', function(e) {
// 		// 		_.submitItem($(this).closest(_.options.filterItemSelector), null);
// 		// 		e.preventDefault();
// 		// 	});
// 		//
// 		// 	this.form.on('submit', function(e) {
// 		// 		$('input', this.form).each(function() {
// 		// 			var input = $(this);
// 		//
// 		// 			if(input.closest('.filter-item--resettable').length !== 0) {
// 		// 				_.processResetItem(input);
// 		// 			}
// 		// 		});
// 		//
// 		// 		_.submit();
// 		// 		e.preventDefault();
// 		// 	});
// 		//
// 		// } else {
// 		// 	// This is for 'Standorte'. Not Ajax. Everytime the request is sent, it goes through initialize again. I'm adding parameters to this whole path
// 		// 	_.writeHash();
// 		// }
// 		//
// 		// // Auto-Submit Formularelemente verarbeiten
// 		// $(this.options.autoSubmitSelector, this.element).each(function() {
// 		// 	$('label', $(this)).on('touchstart', function(e) {
// 		// 		$(this).closest(_.options.filterItemSelector).addClass('filter-item--touch');
// 		// 	});
// 		//
// 		// 	$(':input', $(this)).on('change', function(e) {
// 		// 		_.submitItem($(this).closest(_.options.filterItemSelector), $(this));
// 		// 		_.submit();
// 		// 	});
// 		// });
// 		//
// 		// // Reset All Button verarbeiten
// 		// var resetAll = $(this.options.resetAllSelector, this.element);
// 		// resetAll.on('click', $.proxy(this.resetAll, this));
// 		//
// 		// // Reset Button Container erzeugen
// 		// this.resetContainer = $('<div class="filter-reset--container"></div>');
// 		//
// 		// // Wenn es einen Reset All Button gibt, fuege die Einzel Reset Buttons davor ein, ansonsten am Ende vom Formular
// 		// if(resetAll.length !== 0) {
// 		// 	this.resetContainer.insertBefore(resetAll);
// 		// 	resetAll.appendTo(this.resetContainer);
// 		//
// 		// } else {
// 		// 	this.form.append(this.resetContainer);
// 		// }
// 		//
// 		// if(typeof(_.options.beforeSubmitProcess) === 'function') {
// 		// 	_.beforeSubmitProcess = _.options.beforeSubmitProcess;
// 		// }
// 		//
// 		// if(typeof(_.options.afterSubmitProcess) === 'function') {
// 		// 	_.afterSubmitProcess = _.options.afterSubmitProcess;
// 		// }
// 		//
// 		// if(typeof(_.options.afterProcessItem) === 'function') {
// 		// 	_.afterProcessItem = _.options.afterProcessItem;
// 		// }
// 		//
// 		// // Reset Buttons erzeugen
// 		// $('input', this.form).each(function() {
// 		// 	var input = $(this);
// 		//
// 		// 	if(input.closest('.filter-item--resettable').length !== 0) {
// 		// 		_.processResetItem(input);
// 		// 	}
// 		// });
// 		// this.processResetAllButton();
// 	};
// 	//
// 	// /**
// 	//  * Fuegt einen neuen Marker-Typ hinzu, der spaeter durch addMarker genutzt werden kann
// 	//  *
// 	//  * @see: https://stackoverflow.com/questions/20414387/google-maps-svg-marker-doesnt-display-on-ie-11#answer-40770331
// 	//  * @param {string} name
// 	//  * @param {string} type
// 	//  * @param {object} options
// 	//  */
// 	// GoogleMaps.prototype.addMarkerType = function(name, type, options) {
// 	// 	if(this.defined === true) {
// 	// 		if(type === this.MARKER_TYPE_SIMPLE) {
// 	// 			this.markerTypes[name] = {
// 	// 				type: this.MARKER_TYPE_SIMPLE,
// 	// 				url: options.url
// 	// 			};
// 	//
// 	// 			if(typeof(options.scaledSize) !== 'undefined') {
// 	// 				this.markerTypes[name].scaledSize = new google.maps.Size(options.scaledSize[0], options.scaledSize[1]);
// 	// 			}
// 	// 		}
// 	// 	}
// 	// };
// 	//
// 	// /**
// 	//  * Fuegt einen Marker an angebener Position auf den Karten ein. Der Marker-Typ muss zuvor ueber addMarkerType
// 	//  * hinzugefuegt worden sein
// 	//  *
// 	//  * @see: https://developers.google.com/maps/documentation/javascript/examples/icon-simple
// 	//  * @see: https://developers.google.com/maps/documentation/javascript/examples/icon-complex
// 	//  * @see: https://stackoverflow.com/questions/20414387/google-maps-svg-marker-doesnt-display-on-ie-11#answer-40770331
// 	//  * @param {string} type
// 	//  * @param {object} position
// 	//  */
// 	// GoogleMaps.prototype.addMarker = function(type, position) {
// 	// 	var _ = this;
// 	//
// 	// 	if(this.defined === true) {
// 	// 		_.maps.forEach(function(map) {
// 	// 			if(_.markerTypes[type].type === _.MARKER_TYPE_SIMPLE) {
// 	// 				var options = {
// 	// 					position: {
// 	// 						lat: position.latitude,
// 	// 						lng: position.longitude
// 	// 					},
// 	// 					map: map,
// 	// 					optimized: false,
// 	// 					icon: _.markerTypes[type]
// 	// 				};
// 	//
// 	// 				var marker = new google.maps.Marker(options);
// 	// 			}
// 	// 		});
// 	// 	}
// 	// };
//
// 	return Filter;
// }));