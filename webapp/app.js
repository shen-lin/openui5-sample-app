// Load UI5 Core
import "script-loader!sap/ui/thirdparty/URI";
import "sap/ui/thirdparty/jquery";
import "sap/ui/thirdparty/jqueryui/jquery-ui-position";
import "sap/ui/Device";
import "jquery.sap.global";
import "sap/ui/core/Core";

// Load libraries
import "sap/ui/core/library";
import "sap/m/library";

import ComponentContainer from "sap/ui/core/ComponentContainer";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import AppView from "./view/App.view.xml";
import AppController from "./controller/App.controller.js";
import en_i18n from "./i18n/i18n_en.properties";
import de_i18n from "./i18n/i18n_de.properties";
import en_core from "sap/ui/core/messagebundle_en.properties";
import de_core from "sap/ui/core/messagebundle_de.properties";
import en_m from "sap/m/messagebundle_en.properties";
import de_m from "sap/m/messagebundle_de.properties";

jQuery.sap.registerPreloadedModules({
	version: "2.0",
	url: ".",
	modules: {
		"sap/ui/model/json/JSONModel.js": () => JSONModel,
		"sap/ui/model/resource/ResourceModel.js": () => ResourceModel,
		"sap/ui/demo/todo/view/App.view.xml": AppView,
		"sap/ui/demo/todo/controller/App.controller.js": AppController,
		"sap/ui/demo/todo/i18n/i18n_de.properties": de_i18n,
		"sap/ui/demo/todo/i18n/i18n_en.properties": en_i18n,
		"sap/ui/core/messagebundle_de.properties": de_core,
		"sap/ui/core/messagebundle_en.properties": en_core,
		"sap/m/messagebundle_de.properties": de_m,
		"sap/m/messagebundle_en.properties": en_m,
	},
});

// Load component, controllers & views
import AppComponent from "./Component";

sap.ui.getCore().boot();

new ComponentContainer({
	component: new AppComponent(),
}).placeAt("root");
