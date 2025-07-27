export function observeDOM(callback, root = document.body) {
	if (typeof MutationObserver === "undefined") return;

	let timeoutId = null;
	const debouncedCallback = () => {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			requestAnimationFrame(callback);
		}, 50);
	};

	new MutationObserver(debouncedCallback).observe(root, {
		childList: true,
		subtree: true,
	});
}
