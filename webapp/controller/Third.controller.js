sap.ui.define(["UI5-features/controller/BaseController"], function(BaseController) {
	"use strict";

	return BaseController.extend("UI5-features.controller.Third", {
		onInit: function() {
		},

		onClickOnItem: function(oEvent) {
			var iId = oEvent.getSource().getBindingContext("MyJSONModel").getObject().id;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo('fourthRoute', { entry_id: iId });
		}
	});
});