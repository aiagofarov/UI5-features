sap.ui.define([
	"sap/ui/base/object"
], function(UI5Object) {
		'use strict';
		return UI5Object.extend('UI5-features.modules.utils', {
			constructor: function(UI5Object) {
				this.utilParameter1 = "first parameter";
				this.utilParameter2 = "second parameter";
			},

			utilFunction : function() {
				alert("Util function: I can see " + this.utilParameter1 + " and " + this.utilParameter2);
			}
		});
	});