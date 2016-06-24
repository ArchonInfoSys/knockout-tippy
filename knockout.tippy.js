var ko = require("knockout");
require("./tippy.less");

ko.bindingHandlers.tippy = {
	init: function () {
		return { controlsDescendantBindings: true };
	},
	update: function (element, valueAccessor, allBindingsAccessor, model) {
		var name = ko.utils.unwrapObservable(valueAccessor());

		ko.templates[name] = element.innerHTML;
		ko.renderTemplate("knockout-tippy-main", {
			name: name,
			model: model
		}, null, element, "replaceNode");
	}
};

ko.templates["knockout-tippy-main"] =
	"<div class=\"tippy\" tabindex=\"0\">" +
		"<i class=\"tippy__hint__indicator icon-question-sign icon-large\"></i>" +
		"<div class=\"tippy__content\" data-bind=\"template: { name: name, data: model }\">" +
		"</div>" +
	"</div>";
