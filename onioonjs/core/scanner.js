export function scanTemplates(root = document.body) {
	const elements = [];
	const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
		acceptNode: (node) =>
			node.textContent?.includes("{{")
				? NodeFilter.FILTER_ACCEPT
				: NodeFilter.FILTER_REJECT,
	});
	while (walker.nextNode()) {
		const node = walker.currentNode;
		elements.push({ node, original: node.textContent });
	}
	return elements;
}
