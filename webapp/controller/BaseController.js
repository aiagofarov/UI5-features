sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History", "../model/formatter"],
	function(Controller, History, formatter) {
		'use strict';

		return Controller.extend('UI5-features.controller.BaseController', {
			formatter : formatter,
			baseControllerParameter: "I'm base controller parameter!",

			baseControllerFunction: function() {
				alert("Base controller function has been executed!");
			},

			onNavBack: function(oEvent) {
				var sPreviousHash = History.getInstance().getPreviousHash();
				if (sPreviousHash !== undefined) {
					window.history.go(-1);
				} else {
					this.getRouter().navTo("appHome", {}, true /*no history*/ );
				}
			},

		onNavSecond: function() {
			//Step on next view
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("secondRoute");
		},
		onNavThird: function() {
			//Step on next view
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("thirdRoute");
		}
	
		});
	});