(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(["jquery", "knockout"], factory);
	} else {
		// Browser globals
		factory($, ko);
	}
}(this, function ($, ko) {
	ko.bindingHandlers.tippy = {
		init: function (element) {
			return { controlsDescendantBindings: true };
		},
		update: function (element, valueAccessor, allBindingsAccessor, model) {
			var name = ko.utils.unwrapObservable(valueAccessor());

			ko.templates[name] = $(element).html();
			ko.renderTemplate("knockout-tippy-main", {
				name: name,
				model: model
			}, null, element, "replaceNode");
		}
	};

	ko.templates["knockout-tippy-main"] =
		'<div class="tippy" tabindex="0">' +
			'<i class="tippy__hint__indicator icon-question-sign icon-large"></i>' +
			'<div class="tippy__content" data-bind="template: { name: name, data: model }">' +
			'</div>' +
		'</div>';
}));
