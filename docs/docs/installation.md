# Installation

Onioon.JS is currently available only via CDN. Follow these steps to add Onioon.JS to your project.

## Using CDN (Recommended)

For quick prototyping or small projects, include Onioon.JS via CDN in your JavaScript file with the **module** type (e.g., `main.js`):

```html
<!DOCTYPE html>
<html>
  <head>
    <title>OnioonJS</title>
  </head>
  <body>
    <h1>Hello, {{ name }}</h1>
    <script type="module" src="main.js"></script>
  </body>
</html>
```

In your `main.js` file, import Onioon.JS and set the data:

```js
import { Onioon } from "https://cdn.jsdelivr.net/gh/kalokaradia/Onioon.JS/onioonjs/onioon.js";

Onioon.data.name = "Kaloka Radia Nanda";
```

Run your HTML file and see the result. Make sure your device is connected to the internet.
