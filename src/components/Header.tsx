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

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export function Header() {
  const navigate = useNavigate();

  const handleSearchSubmit = function (event: React.FormEvent) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const searchTerm = (form.elements.namedItem("search") as HTMLInputElement)
      .value;
    if (searchTerm) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`, {
        replace: true,
      });
    }
  };
  return (
    <div className="header">
      <div className="logo">MovieDB</div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          name="search"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}
