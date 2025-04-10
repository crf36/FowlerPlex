/*======================================================================
 * FILE:    MainPage.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Component to organize the single-page application
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navigation } from "./Navigation";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export default function MainPage() {
  return (
    <main style={{ width: "100%" }}>
      <Header />
      <Navigation />
      <Footer />
    </main>
  );
}
