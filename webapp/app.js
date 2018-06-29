// Load UI5 Core
import "ui5_1.54/resources/ui5loader";
import "ui5_1.54/resources/ui5loader-autoconfig";
import "ui5_1.54/resources/sap/ui/core/Core";

// Load component, controllers & views
import ComponentContainer from "ui5_1.54/resources/sap/ui/core/ComponentContainer";
import AppComponent from "./Component";

sap.ui.getCore().boot();

new ComponentContainer({component: new AppComponent()}).placeAt("root");
