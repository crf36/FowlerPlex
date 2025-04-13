/*======================================================================
 * FILE:    Header.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Header component with navigation tabs
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <div className="header">
      <div className="header-left">
        <img
          className="logoImg"
          src={`${import.meta.env.BASE_URL}TMDB_Logo.svg`}
          onClick={() => navigate("/")}
          alt="TMDB Logo"
        />
        <div className="nav-tabs">
          <div
            className={`nav-tab ${isActive("/") ? "active" : ""}`}
            onClick={() => navigate("/")}
          >
            Home
          </div>
          <div
            className={`nav-tab ${isActive("/search") ? "active" : ""}`}
            onClick={() => navigate("/search")}
          >
            Search
          </div>
        </div>
      </div>
    </div>
  );
}
