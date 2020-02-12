sap.ui.define(["sap/ui/core/util/mockserver"], function(MockServer) {
	"use strict";

	return {
		mainServer: null,

		init: function() {
			var sPath = jQuery.sap.getModulePath("UI5-features.localService");
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: 1500
			});

			this.mainServer = new MockServer({
				rootUrl: "/sap/opu/odata/iwbep/GWSAMPLE_BASIC/"
			});

			this.mainServer.simulate(sPath + "/metadata.xml", {
				sMockdataBaseUrl: sPath + "/mockdata",
				bGenerateMissingMockData: true
			});
			this.mainServer.start();
		},

		stop: function() {
			this.mainServer.stop();
		}
	};
});