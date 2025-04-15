/*======================================================================
 * FILE:    main.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Code to mount the app onto the web-page
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

/*----------------------------------------------------------------------
 *                      MAIN LOGIC
 */
createRoot(document.getElementById("root")!).render(<App />);
