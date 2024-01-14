// core.js

// Import the custom themes
import { themes } from './CustomSpinify.js'

/**
 * CustomSpinner class representing a customizable spinner.
 * @class
 */
class CustomSpinner {
	/**
	 * Creates an instance of CustomSpinner.
	 * @constructor
	 * @param {string} style - The style/theme of the spinner.
	 * @param {string} text - The loading text associated with the spinner.
	 */
	constructor(style = 'spinify', text = 'Loading...') {
		const  selectedStyle = themes[style] || themes.spinify
		this.frames = selectedStyle.frames
		this.interval = selectedStyle.interval
		this.text = text
		this.frameIndex = 0
		this.intervalId = null
	}

	/**
	 * Starts the spinner animation.
	 */
	start() {
		this.intervalId = setInterval(() => {
			this.render()
			this.frameIndex = (this.frameIndex + 1) % this.frames.length
		}, this.interval)
	}

	/**
	 * Stops the spinner animation and clears the console.
	 */
	stop() {
		clearInterval(this.intervalId)
		console.clear()
		console.log(`✔ ${this.text}`)
	}

	/**
	 * Renders the current frame of the spinner.
	 */
	render() {
		const frame = this.frames[this.frameIndex]
		console.clear()
		console.log(`${frame} ${this.text}`)
	}
}

export { CustomSpinner }
