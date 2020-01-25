sap.ui.define(
	["sap/ui/core/mvc/Controller"],
	function(Controller) {
		'use strict';

		return Controller.extend('UI5-features.controller.BaseController', {
			baseControllerParameter: "I'm base controller parameter!",
			baseControllerFunction: function() {
				alert("Base controller function has been executed!");
			}
		});
	});