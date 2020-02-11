sap.ui.define(["UI5-features/controller/BaseController"], function(BaseController) {
	"use strict";

	return BaseController.extend("UI5-features.controller.Third", {
		onInit: function() {
			//Attach MyJSONModel
			//this.byId("tab2").setModel(this.getOwnerComponent().getModel('MyJSONModel'));
		},

		onClickOnItem: function(oEvent) {
			//var oModel = this.getView().getModel("MyJSONModel");
			//alert("Table item has been clicked!");

			//Element binding
			//var oItem = oEvent.getParameter('listItem');
			//var oSelectedObject = oItem.getBindingContext().getObject();

//			var oSelectedObject = oEvent.getSource().getBindingContext("MyJSONModel").getObject();
			
			var iId = oEvent.getSource().getBindingContext("MyJSONModel").getObject().id;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo('fourthRoute', { entry_id: iId });
		}
	});
});