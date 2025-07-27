export function renderAll(elements, data) {
	elements.forEach((item) => {
		const newText = parseTemplate(item.original, data);
		if (item.node.textContent !== newText) item.node.textContent = newText;
	});
}

export function parseTemplate(text, data) {
	return text.replace(/\{\{([^}]+)\}\}/g, (_, expression) => {
		expression = expression.trim();
		try {
			// Create a function with data keys as variables and evaluate the expression
			const func = new Function(
				...Object.keys(data),
				"return " + expression + ";"
			);
			return func(...Object.values(data));
		} catch (e) {
			// Fallback to original template if evaluation fails
			return "{{" + expression + "}}";
		}
	});
}
