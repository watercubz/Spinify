// app.js
import { CustomSpinner } from "./src/core.js"; // Import the core functionality of the application.

// Create a new instance of CustomSpinner by choosing the Spinify theme and providing a loading text.
const Spinify = new CustomSpinner("spinify", "loading...");
Spinify.start(); // Start the instance.

// Simulate a time-consuming task.
setTimeout(() => {
  Spinify.stop(); // Stop the application after 3 seconds.
}, 3000);
