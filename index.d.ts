
export declare class CustomSpinner {
	/**
   * Constructor for CustomSpinner class.
   * @param style - The style of the spinner.
   * @param text - The text to display with the spinner.
   */
	constructor(style?: string, text?: string);
 
	/**
   * ```typescript
   * import { CustomSpinner } from 'spinify';
   * 
   * const spetSpinner = new CustomSpinner('dots', "Loading...");
   * 
   * spetSpinner.start();
   * 
   * setTimeout(() => {
   *   spetSpinner.stop();
   * }, 5000);
   * ```
     * @param start - initialize the application to start using the core with CustomSpinner
    */
	start(): void;

	/**
      * ```typescript
      * spetSpinner.start();
      * 
      *  setTimeout(() => {
      *   spetSpinner.stop();
      * }, 5000);
      * ```
      * @param stop - ends the application from the time set in setTimeout
     */

	stop(): void;

}

export declare class Theme {
	/**
   * Constructor for Theme class.
   * @param frame - 
   * @param interval -
   */
	constructor(frame?: string[], interval?: number[]);  

	/**
    * ```typescript
    * import {CustomSpinner} from "spinify"
    * 
    * const test = new CustomSpinner("spinify", "loading...")
    * test.start();
    * 
    *  setTimeout(() => {
    *   test.stop();
    * }, 5000);
    * ```
    * @param spinify - spinify is the theme for de spinify
   */
	spinify: CustomSpinner
  
	/**
    * ```typescript
    * import {CustomSpinner} from "spinify"
    * 
    * const test = new CustomSpinner("dots", "loading...")
    * test.start();
    * 
    *  setTimeout(() => {
    *   test.stop();
    * }, 5000);
    * ```
    * @param spinify - spinify is the theme for de spinify
   */
	dots: CustomSpinner
}
