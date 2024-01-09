import { spinify } from "./CustomSpinify.js";

// Cambiado el nombre de la clase y la exportación
export class CustomSpinner {
  constructor(style = "dots", text = "Loading...") {
    const selectedStyle = spinify[style] || spinify["dots"];
    this.frames = selectedStyle.frames;
    this.interval = selectedStyle.interval;
    this.text = text;
    this.frameIndex = 0;
    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.render();
      this.frameIndex = (this.frameIndex + 1) % this.frames.length;
    }, this.interval);
  }

  stop() {
    clearInterval(this.intervalId);
    console.clear();
    console.log(`✔ ${this.text}`);
  }

  render() {
    const frame = this.frames[this.frameIndex];
    console.clear();
    console.log(`${frame} ${this.text}`);
  }
}
