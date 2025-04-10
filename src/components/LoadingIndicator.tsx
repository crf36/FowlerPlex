/*======================================================================
 * FILE:    LoadingIndicator.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Component to display a loading indicator to the user
 */
/*----------------------------------------------------------------------
 *                      Imports
 */
import "./LoadingIndicator.css";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */

export default function LoadingIndicator() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <span className="loading-text">Loading...</span>
    </div>
  );
}
