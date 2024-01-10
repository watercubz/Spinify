export declare class CustomSpinner {
     /**
   * Constructor for CustomSpinner class.
   * @param style - The style of the spinner.
   * @param text - The text to display with the spinner.
   */
    constructor(style?: string, text?: string);
 
     /**
   * @example
   * ```typescript
   * import { CustomSpinner } from 'spinify';
   * const spetSpinner = new CustomSpinner("spet", "Loading...");
   * spetSpinner.start();
   * setTimeout(() => {
   *   spetSpinner.stop();
   * }, 5000);
   * ```
   */
    start(): void;
    /**
   * @example
   * ```typescript
   * import { CustomSpinner } from 'spinify';
   * const spetSpinner = new CustomSpinner("spet", "Loading...");
   * spetSpinner.start();
   * setTimeout(() => {
   *   spetSpinner.stop();
   * }, 5000);
   * ```
   */
    stop(): void;

}