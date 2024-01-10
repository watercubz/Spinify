// index.d.ts

// Import type definitions for spinners
import { CustomSpinner } from './src/core';
import './src/CustomSpinify'; // Make sure to import CustomSpinify for type definitions

// Documentation for available themes
/**
 * Objects representing different spinner themes available.
 */
export const spinify: {
  /**
   * Dots theme.
   * @example
   * ```typescript
   * import { spinify } from 'spinify';
   * const dotsSpinner = new spinify.dots("dots", "Loading...");
   * dotsSpinner.start();
   * setTimeout(() => {
   *   dotsSpinner.stop();
   * }, 5000);
   * ```
   */
  dots: CustomSpinner;
  
  /**
   * Lines theme.
   * @example
   * ```typescript
   * import { spinify } from 'spinify';
   * const linesSpinner = new spinify.lines("lines", "Loading...");
   * linesSpinner.start();
   * setTimeout(() => {
   *   linesSpinner.stop();
   * }, 5000);
   * ```
   */
  lines: CustomSpinner;

  /**
   * Arrows theme.
   * @example
   * ```typescript
   * import { spinify } from 'spinify';
   * const arrowsSpinner = new spinify.arrows("arrows", "Loading...");
   * arrowsSpinner.start();
   * setTimeout(() => {
   *   arrowsSpinner.stop();
   * }, 5000);
   * ```
   */
  arrows: CustomSpinner;

  /**
   * Custom theme.
   * @example
   * ```typescript
   * import { spinify } from 'spinify';
   * const customSpinner = new spinify.custom("custom", "Loading...");
   * customSpinner.start();
   * setTimeout(() => {
   *   customSpinner.stop();
   * }, 5000);
   * ```
   */
  custom: CustomSpinner;

  /**
   * Spinify theme.
   * @example
   * ```typescript
   * import { spinify } from 'spinify';
   * const spinifySpinner = new spinify.spinify("spinify", "Loading...");
   * spinifySpinner.start();
   * setTimeout(() => {
   *   spinifySpinner.stop();
   * }, 5000);
   * ```
   */
  spinify: CustomSpinner;

  /**
   * Spet theme.
   * @example
   * ```typescript
   * import { spinify } from 'spinify';
   * const spetSpinner = new spinify.spet("spet", "Loading...");
   * spetSpinner.start();
   * setTimeout(() => {
   *   spetSpinner.stop();
   * }, 5000);
   * ```
   */
  spet: CustomSpinner;
};
