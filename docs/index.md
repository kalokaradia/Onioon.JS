---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
    name: "Onioon.JS Docs"
    text: "lightweight and reactive JavaScript library for web development."
    tagline: Just Code and Go!
    actions:
        - theme: brand
          text: Go To Docs
          link: /docs/what-is-onioon
        - theme: alt
          text: See GitHub
          link: https://github.com/kalokaradia/Onioon.JS
    image:
        src: ./logo.svg
        alt: Onioon.JS logo

features:
    - icon: 🔍
      title: Template scanning
      details: It scans the DOM for text nodes containing mustache-style templates {{ }} to identify dynamic content.
    - icon: ⚡
      title: Reactive rendering
      details: It parses and renders templates with data binding, updating the DOM text content reactively when data changes.
    - icon: 👁️
      title: DOM observation
      details: It observes DOM mutations using MutationObserver and triggers re-rendering to keep the UI in sync with data and DOM changes.
---
