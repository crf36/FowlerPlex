/*======================================================================
 * FILE:    SearchPage.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Component to organize search display. If there is a
 *              query, it displays the results. Otherwise, it displays
 *              the landing.
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { SearchResults } from "./SearchResults";
import { SearchLanding } from "./SearchLanding";
import "./SearchPage.css";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [input, setInput] = useState<string>(query);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/search" && !query) {
      setInput("");
    }
  }, [location.pathname, query]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.trim()) {
      navigate(`/search?query=${encodeURIComponent(input.trim())}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <div className="search-page">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Search movies..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {query ? <SearchResults query={query} /> : <SearchLanding />}
    </div>
  );
}
