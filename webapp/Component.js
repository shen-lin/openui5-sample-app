import UIComponent from "sap/ui/core/UIComponent";
import manifest from "./manifest";

export default UIComponent.extend('sap.ui.demo.todo.Component', {
	metadata: {
		manifest,
	}
});
