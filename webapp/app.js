// Load UI5 Core
import "script-loader!sap/ui/thirdparty/URI";
import "sap/ui/thirdparty/jquery";
import "sap/ui/thirdparty/jqueryui/jquery-ui-position";
import "sap/ui/Device";
import "jquery.sap.global";
import "sap/ui/core/Core";

// Load libraries
import "sap/ui/core/library";
import "sap/ui/core/messagebundle.properties";
import "sap/ui/core/messagebundle_en.properties";
import "sap/ui/core/messagebundle_de.properties";

import "sap/m/library";
import "sap/m/messagebundle.properties";
import "sap/m/messagebundle_en.properties";
import "sap/m/messagebundle_de.properties";

// Load component, controllers & views
import ComponentContainer from "sap/ui/core/ComponentContainer";
import AppComponent from "./Component";

sap.ui.getCore().boot();

new ComponentContainer({
	component: new AppComponent(),
}).placeAt("root");
