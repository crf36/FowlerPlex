/*======================================================================
 * FILE:    Header.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Header component with title and search bar
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = function (
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`, {
        replace: true,
      });
    }
  };
  return (
    <div className="header">
      <div className="logo">MovieDB</div>
      <form onSubmit={handleSearchSubmit}>
        <input
          id="search"
          type="text"
          placeholder="Search movies..."
          className="search-input"
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}
