sap.ui.define([
	"JustForFunFirstProjectJustForFun/controller/BaseController",
	"JustForFunFirstProjectJustForFun/modules/utils",
	"sap/ui/model/json/JSONModel"
	
], function(BaseController, Utils, JSONModel) {
	"use strict";

	return BaseController.extend("JustForFunFirstProjectJustForFun.controller.Start", {
		onInit: function() {
			//Set simple data model
			var oData = {
				element1 : {
					field1 : "I'm the data that stored in the model!"
				}
			};
			//Init JSONModel
			var oModel = new JSONModel(oData);
			//Attach Model to View
			this.getView().setModel(oModel, "ModelName");
			//Init module: utils.js
			this.utils = new Utils();
		},

		action: function() {
			var btnToolbar = this.byId("btnToolbar");
			if (btnToolbar) {
				btnToolbar.setText("I pressed!");
			}
			
			var oModel = this.getView().getModel('MyJSONModel');
			if (oModel) {
				//Check model that been defined just in JS code
				alert( "Model MyJSONModel is here!" );
			} else {
				alert( "Model MyJSONModel not found!" );
			}
			
        	//Check baseController module functions
			this.baseControllerFunction();
			
			//Check utils module functions
			this.utils.utilFunction();
			
		},

		onClickOnItem: function(oEvent) {
			var oModel = this.getView().getModel("MyJSONModel");
			//alert("Table item has been clicked!");
			
			//Element binding
			var oItem = oEvent.getParameter('listItem');
			var sBindingPath = oItem.getBindingContextPath();
			var oPanel = this.byId("formForElementBinding");
			oPanel.bindElement({path : sBindingPath, model : "MyJSONModel"});
		}
	});
});