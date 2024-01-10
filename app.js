//app.js
import { CustomSpinner } from "./src/core.js"; // Import the core of the application where all the functionality resides.

// Choose the style of your Snipify that you want (you can change 'dots' to another style).
const Spinify = new CustomSpinner("spinify", "loading..."); // Create a new instance of CustomSpinner and pass the two parameters it needs. The first one is the Spinify theme
// (theme = "dots" etc., "text", in the text, we put the text we want to display).
Spinify.start(); // Start the instance with the start() command.

// Simulate a time-consuming task
setTimeout(() => {
  Spinify.stop(); // Here, after 3 seconds, the application will stop.
}, 3000);
