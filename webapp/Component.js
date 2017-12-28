import UIComponent from "sap/ui/core/UIComponent";
import manifest from "./manifest";

// require classes used in manifest
import "sap/ui/model/json/JSONModel"
import "sap/ui/model/resource/ResourceModel";

// require resources used in manifest
import "./controller/App.controller.js";
import "./view/App.view.xml";
import "./i18n/i18n.properties";
import "./i18n/i18n_en.properties";
import "./i18n/i18n_de.properties";

import "./css/styles.css"

export default UIComponent.extend('sap.ui.demo.todo.Component', {
	metadata: {
		manifest,
	}
});
