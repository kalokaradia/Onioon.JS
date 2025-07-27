# Onioon.JS

Onioon.JS is a lightweight and reactive JavaScript library for web development.

Go to Onioon [documentation](https://onioonjs.netlify.app) for detailed guides and usage examples.

## Getting Started

Include the Onioon.JS library and your script in your HTML:

```html
<script type="module" src="main.js"></script>
```

Use template expressions in your HTML:

```html
<h1>{{ title }}</h1>
<p>Hello {{ name }}!</p>
```

Set data dynamically in your script:

```js
import { Onioon } from "https://cdn.jsdelivr.net/gh/kalokaradia/Onioon.JS/onioonjs/onioon.js";

Onioon.data.title = "OnioonJS Test";
Onioon.data.name = "World";
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

[MIT License](./LICENSE)
