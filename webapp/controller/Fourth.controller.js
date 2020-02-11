sap.ui.define([ "UI5-features/controller/BaseController" ], function(BaseController) {
	"use strict";

	return BaseController.extend("UI5-features.controller.Fourth", {
		onInit: function() {
			//BaseController.prototype.init.apply(this, arguments);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("fourthRoute").attachPatternMatched(this.handleRouteMatched, this);
		},
		handleRouteMatched: function(oEvent) {
			//Get url GET parameters
			var args = oEvent.getParameter("arguments");
			//Get data
			var oData = this.getView().getModel("MyJSONModel").getProperty("/table1");
			//Get index of selected entry
			var iIndex;
			oData.some(function(item, index) {
				if (item.id === args.entry_id) {
					iIndex = index;
					return true;
				}
			}.bind(this));
			if (iIndex || iIndex === 0) {
				this.byId("formElementDetails").bindElement({
					path: '/table1/' + iIndex,
					model: "MyJSONModel"
				});
			}
		}
	});
});