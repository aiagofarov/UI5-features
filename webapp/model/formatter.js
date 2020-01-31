sap.ui.define([], function () {
	"use strict";
	return {
		characteristicOfValue: function (nValue) {
			return nValue > 0.5 ? 'More than 0.5' : 'Less than or equal to 0.5';
		}
	};
});