// Load UI5 Core
import "ui5/sap.ui.core/src/ui5loader";
import "ui5/sap.ui.core/src/ui5loader-autoconfig";
import "ui5/sap.ui.core/src/sap/ui/core/Core";

// Load component, controllers & views
import ComponentContainer from "ui5/sap.ui.core/src/sap/ui/core/ComponentContainer";
import AppComponent from "./Component";

sap.ui.getCore().boot();

new ComponentContainer({component: new AppComponent()}).placeAt("root");
