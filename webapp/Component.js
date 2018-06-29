<<<<<<< HEAD
// import UIComponent from "sap/ui/core/UIComponent"; import manifest from
// "./manifest";
//
// Load libraries import "sap/ui/core/library"; import
// "sap/ui/core/messagebundle.properties"; import
// "sap/ui/core/messagebundle_en.properties"; import
// "sap/ui/core/messagebundle_de.properties";
//
// import "sap/m/library"; import "sap/m/messagebundle.properties"; import
// "sap/m/messagebundle_en.properties"; import
// "sap/m/messagebundle_de.properties";
//
// require classes used in manifest import "sap/ui/model/json/JSONModel" import
// "sap/ui/model/resource/ResourceModel"; import "sap/ui/core/mvc/XMLView";
//
// require resources used in manifest import "./controller/App.controller.js";
// import "./view/App.view.xml"; import "./i18n/i18n.properties"; import
// "./i18n/i18n_en.properties"; import "./i18n/i18n_de.properties";
//
// import "./css/styles.css"

import UIComponent from "ui5/sap.ui.core/src/sap/ui/core/UIComponent";
import manifest from "./manifest";

// Load libraries
import "ui5/sap.ui.core/src/sap/ui/core/library";
import "ui5/sap.ui.core/src/sap/ui/core/messagebundle.properties";
import "ui5/sap.ui.core/src/sap/ui/core/messagebundle_en.properties";
import "ui5/sap.ui.core/src/sap/ui/core/messagebundle_de.properties";

import "ui5/sap.m/src/sap/m/library";
import "ui5/sap.m/src/sap/m/messagebundle.properties";
import "ui5/sap.m/src/sap/m/messagebundle_en.properties";
import "ui5/sap.m/src/sap/m/messagebundle_de.properties";

// require classes used in manifest
import "ui5/sap.ui.core/src/sap/ui/model/json/JSONModel"
import "ui5/sap.ui.core/src/sap/ui/model/resource/ResourceModel";
import "ui5/sap.ui.core/src/sap/ui/core/mvc/XMLView";
=======
import UIComponent from "sap/ui/core/UIComponent";
import manifest from "./manifest";

// Load libraries
import "sap/ui/core/library";
import "sap/ui/core/messagebundle.properties";
import "sap/ui/core/messagebundle_en.properties";
import "sap/ui/core/messagebundle_de.properties";

import "sap/m/library";
import "sap/m/messagebundle.properties";
import "sap/m/messagebundle_en.properties";
import "sap/m/messagebundle_de.properties";

// require classes used in manifest
import "sap/ui/model/json/JSONModel"
import "sap/ui/model/resource/ResourceModel";
import "sap/ui/core/mvc/XMLView";
>>>>>>> 56a82e7fb5645f778ff8e43cc722c42872c7e4e3

// require resources used in manifest
import "./controller/App.controller.js";
import "./view/App.view.xml";
import "./i18n/i18n.properties";
import "./i18n/i18n_en.properties";
import "./i18n/i18n_de.properties";

import "./css/styles.css"

export default UIComponent.extend('sap.ui.demo.todo.Component', {metadata: {
		manifest
	}});
