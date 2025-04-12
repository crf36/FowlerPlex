import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>Oops! Page Not Found</h1>
        <p>
          We couldn't find the page you're looking for. Please check the URL or
          return to the home page.
        </p>
        <Link to="/" className="back-home-button">
          Go to Home
        </Link>
      </div>
    </div>
  );
};
