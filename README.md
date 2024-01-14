[![Publish package npm](https://github.com/watercubz/Spinify/actions/workflows/npm-publish.yml/badge.svg?branch=master)](https://github.com/watercubz/Spinify/actions/workflows/npm-publish.yml)

# Spinify

Spinify is a simple and customizable terminal spinner library for Node.js.

# Structure

```
└── 📁spinify
    └── 📁.github
        └── 📁workflows
            └── npm-publish.yml
    └── .gitignore
    └── app.js
    └── biome.json
    └── index.d.ts
    └── index.js
    └── LICENSE.txt
    └── package-lock.json
    └── package.json
    └── README.md
    └── 📁src
        └── core.js
        └── CustomSpinify.js
    └── 📁test
        └── core.spec.js
```

## Installation

You can install Spinify using npm:

bash
npm install spinify

## Usage

1. Import the CustomSpinner class in your Node.js project:

   ```javascript
   const { CustomSpinner } = require("spinify");
    // or
   import { CustomSpinner } from "spinify" 
   ```

2. Create a new spinner instance, providing the desired style and text:

```javascript
const Spinify = new CustomSpinner(spinify.lines, "Loading...");
```

You can choose from various spinner styles such as 'dots', 'arrows', 'lines', etc.

3. Start the spinner:

```javascript
Spinify.start();
```

4. Simulate a time-consuming task. For example, use setTimeout:

```javascript
setTimeout(() => {
  Spinify.stop();
}, 5000);
```

Adjust the duration as needed.

## Spinify Styles

Spinify supports various spinner styles. You can customize the spinner style by providing the desired style when creating the CustomSpinner instance.

```javascript
const Spinify = new CustomSpinner("arrows", "Processing...");
```

Available spinner styles include 'dots', 'arrow', 'line', 'step', and more.

## Example

Here's a simple example of using Spinify to display a spinner while simulating a time-consuming task:

```javascript
const { CustomSpinner } = require("spinify");
// or
import { CustomSpinner } from 'spinify' 

const Snipify = new CustomSpinner("lines", "Loading...");
Snipify.start();

// Simulate a time-consuming task
setTimeout(() => {
  Snipify.stop();
}, 5000);
```

Feel free to explore different spinner styles and integrate Spinify into your projects for a delightful terminal experience.

## Spinify Themes

```js
export const spinify = {
  spinify: {
    frames: ["-/", "/-", "/", "---", "---", "-/"],
    interval: 80,
  },
  spet: {
    frames: ["<", ">", "<", ">", "*", "<", ">"],
    interval: 100,
  },
  dots: {
    frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"],
    interval: 80,
  },
  lines: {
    frames: ["-", "\\", "|", "/"],
    interval: 100,
  },
  arrows: {
    frames: ["←", "↖", "↑", "↗", "→", "↘", "↓", "↙"],
    interval: 120,
  },
  custom: {
    frames: ["⊙", "⋆", "✸", "❉", "✦", "✿", "❀"],
    interval: 100,
  },
  asterisk: {
    frames: ["***", "**", "***", "**", "***", "**"],
    interval: 120,
  },
};
```

- Select your spinify theme favorite

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy spinning your tasks with Spinify! If you encounter any issues or have suggestions, feel free to [contribute](CONTRIBUTING.md) or [report a bug](https://github.com/watercubz/spinify).
