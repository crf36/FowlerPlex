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
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Navigation } from "./Navigation";
import "./MainPage.css";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export default function MainPage({ children }: { children?: React.ReactNode }) {
  return (
    <main>
      <div className="page-container">
        <Header />
        <Navigation />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </main>
  );
}
