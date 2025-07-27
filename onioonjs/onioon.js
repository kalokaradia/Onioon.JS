import { scanTemplates } from "./core/scanner.js";
import { renderAll } from "./core/renderer.js";
import { observeDOM } from "./core/observer.js";

const Onioon = {
	data: {},
	elements: [],
	root: document.body,

	init() {
		this.elements = scanTemplates(this.root);
		renderAll(this.elements, this.data);
		observeDOM(() => {
			this.elements = scanTemplates(this.root);
			renderAll(this.elements, this.data);
		}, this.root);
	},

	setData(key, value) {
		this.data[key] = value;
		renderAll(this.elements, this.data);
	},
};

document.addEventListener("DOMContentLoaded", () => {
	document.body.classList.add("onioon-loading");
	setTimeout(() => {
		Onioon.init();
		document.body.classList.remove("onioon-loading");
	});
});

window.Onioon = Onioon;
window.$onioon = (key, val) =>
	arguments.length === 2 ? Onioon.setData(key, val) : Onioon.data[key];

export { Onioon };
