/*======================================================================
 * FILE:    utils.ts
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Utility function for tailwind-css
 */

/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/*----------------------------------------------------------------------
 *                      FUNCTION
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
