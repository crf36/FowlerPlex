/*======================================================================
 * FILE:    Footer.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Component to display footer with copyright and TMDB notice.
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import "./Footer.css";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 FowlerPlex. All rights reserved.</p>
      <p className="tmdb-attribution">
        This website uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </footer>
  );
};
