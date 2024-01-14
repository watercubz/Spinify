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
   * const spetSpinner = new CustomSpinner("spinify", "Loading...");
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
      * @param start - ends the application from the time set in setTimeout
     */

   stop(): void;

}