import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	lang: "en-US",
	title: "Onioon.JS Docs",
	titleTemplate: "Onioon.JS",
	description:
		"Guide for Onioon.JS – a lightweigh and reactive JavaScript library for web development.",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: "/logo.svg",

		nav: [
			{ text: "Home", link: "/" },
			{ text: "Docs", link: "/docs/what-is-onioon" },
		],

		search: {
			provider: "local",
		},

		sidebar: [
			{
				text: "Getting Started",
				items: [
					{ text: "What is Onioon?", link: "/docs/what-is-onioon" },
					{ text: "Installation", link: "/docs/installation" },
					{ text: "Basic Usage", link: "/docs/basic-usage" },
				],
			},
		],

		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/kalokaradia/Onioon.JS",
			},
		],

		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2025-present Kaloka Radia Nanda",
		},
	},
});
