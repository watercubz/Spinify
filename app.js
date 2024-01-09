//app.js
import { CustomSpinner } from "./core.js";

// elige el stylo de tu Snipify que deseas (puedes cambiar 'dots' por otro estilo)
const Spinify = new CustomSpinner("dots", "loading...");
Spinify.start();

// simula una tarea que lleva tiempo
setTimeout(() => {
  Spinify.stop();
}, 5000);
