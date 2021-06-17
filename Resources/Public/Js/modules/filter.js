const filter = function(element, options) {
	let _ = this;

	_.element = element;
	_.form = null;
	_.resetContainer = null;
	_.options = {};
	_.defaults = {
		paginatorSelector: '.f3-widget-paginator',
		ajax: false,
		beforeSubmit: null,
		afterSubmit: null,
		beforeProcessResponse: null,
		beforeProcessItem: null,
		afterProcessItem: null,
		submitSelector: '.filter--submit',
		autoSubmitSelector: '.filter-item--auto-submit',
		formSelector: 'form',
		filterItemSelector: '.filter-item',
		containerSelector: null,
		itemsSelector: null,
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

	_.beforeSubmit();
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
		// document.body.classList.add('is--filter-loading');

		fetch(uri, {
			body: data,
			method: 'post',
		}).then(function(response) {
			return response.text();

		}).then(function(body) {
			let html = _.beforeProcessResponse(body);

			_.processResponse(html, false);
			_.processPaginator(html);
			_.afterSubmit();
		});

		// lokale Verarbeitung der Filter
	} else if(_.options.local === true) {
		_.afterSubmit();

		// Formular absenden
	} else {
		this.form.submit();
	}

	if(typeof(event) !== 'undefined') {
		event.preventDefault();
	}
};

filter.prototype.beforeSubmit = function() {
	if(typeof(this.options.beforeSubmit) === 'function') {
		this.options.beforeSubmit();
	}
};

filter.prototype.afterSubmit = function() {
	if(typeof(this.options.afterSubmit) === 'function') {
		this.options.afterSubmit();
	}
};

filter.prototype.beforeProcessResponse = function(response) {
	let parser = new DOMParser();
	let html = parser.parseFromString(response, 'text/html');

	if(typeof(this.options.beforeProcessResponse) === 'function') {
		return this.options.beforeProcessResponse(html);
	}

	return html;
};

filter.prototype.beforeProcessItem = function(item) {
	if(typeof(this.options.beforeProcessItem) === 'function') {
		this.options.beforeProcessItem(item);
	}
};

filter.prototype.afterProcessItem = function(item) {
	if(typeof(this.options.afterProcessItem) === 'function') {
		this.options.afterProcessItem(item);
	}
};

filter.prototype.processPaginator = function(html) {
	// if(html !== null) {
	// 	if($(html).find(this.options.paginatorSelector).length !== 0) {
	// 		$(this.options.paginatorSelector, this.element).html($(html).find(this.options.paginatorSelector).html());
	// 	} else {
	// 		$(this.options.paginatorSelector, this.element).empty();
	// 	}
	// }
	//
	// if($('.f3-widget-paginator .next', this.element).length === 0) {
	// 	$('.lazyload--trigger', this.element).addClass('disabled').prop('disabled', true);
	//
	// } else {
	// 	$('.lazyload--trigger', this.element).removeClass('disabled').prop('disabled', false);
	// }
};

filter.prototype.processResponse = function(html, append) {
	if(this.options.containerSelector) {
		let _ = this;
		let container = this.element.querySelector(_.options.containerSelector);
		let items = null;

		if(append === false) {
			xna.emptyNode(container);
		}

		if(_.options.itemsSelector !== null) {
			items = html.querySelectorAll(_.options.itemsSelector);
		}

		if(items !== null) {
			items.forEach(function(node) {
				let item = node.cloneNode(true);

				_.beforeProcessItem(item);
				container.append(item);
				_.afterProcessItem(item);
			});

		} else {
			container.append(html.querySelector(_.options.containerSelector).innerHTML);
		}
	}
};

export default filter;