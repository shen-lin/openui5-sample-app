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

// require resources used in manifest
import "./controller/App.controller.js";
import "./view/App.view.xml";
import "./i18n/i18n.properties";
import "./i18n/i18n_en.properties";
import "./i18n/i18n_de.properties";

import "./css/styles.css"

import "ui5/sap.ui.core/src/sap/ui/dom/jquery/Focusable";
import "ui5/sap.ui.core/src/jquery.sap.dom";

export default UIComponent.extend('sap.ui.demo.todo.Component', {metadata: {
		manifest
	}});
