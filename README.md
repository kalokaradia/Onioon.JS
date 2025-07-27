# OnioonJS

OnioonJS is a lightweight and reactive JavaScript templating library designed to provide simple and efficient data binding and dynamic rendering for your web applications.

Go to Onioon [documentation](https://onioonjs.netlify.app) for detailed guides and usage examples.

## Getting Started

Include the OnioonJS library and your script in your HTML:

```html
<script type="module" src="./script.js"></script>
```

Use template expressions in your HTML:

```html
<h1>{{ title }}</h1>
<p>Hello {{ name }}!</p>
```

Set data dynamically in your script:

```js
import { Onioon } from "https://cdn.jsdelivr.net/gh/kalokaradia/OnioonJS/onioonjs/onioon.js";

Onioon.data.title = "OnioonJS Test";
Onioon.data.name = "World";
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

[MIT License](./LICENSE)
