// Load UI5 Core
import "@openui5/sap.ui.core/src/ui5loader";
import "@openui5/sap.ui.core/src/ui5loader-autoconfig";
import "@openui5/sap.ui.core/src/sap/ui/core/Core";

// Load component, controllers & views
import ComponentContainer from "@openui5/sap.ui.core/src/sap/ui/core/ComponentContainer";
import AppComponent from "./Component";

sap.ui.getCore().boot();

new ComponentContainer({
	component: new AppComponent(),
}).placeAt("root");
