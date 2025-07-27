# Basic Usage

Here we will learn basic usage examples of Onioon.JS and explore its available features.

## Creating a Basic Program

Prepare your HTML file as follows:

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

Then, in your `main.js` file, add this code:

```js
import { Onioon } from "https://cdn.jsdelivr.net/gh/kalokaradia/Onioon.JS/onioonjs/onioon.js";

Onioon.data.name = "Kaloka Radia Nanda";
```

Your browser will display:

![Basic Usage Image 1](/img/basic-usage-img-1.png)
