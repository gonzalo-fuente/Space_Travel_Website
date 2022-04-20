import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

function Navbar({ location }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <header className="primary-header flex">
        <div>
          <img src={logo} alt="space tourism logo" className="logo" />
        </div>
        <button
          className={`mobile-nav-toggle ${isMenuOpen ? "open" : ""}`}
          aria-controls="primary-navigation"
          onClick={() => {
            setIsMenuOpen((prevState) => !prevState);
          }}
        >
          <span className="sr-only" aria-expanded={isMenuOpen}>
            Menu
          </span>
        </button>
        <nav>
          <ul
            id="primary-navigation"
            data-visible={isMenuOpen}
            className="primary-navigation underline-indicators flex"
          >
            <li className={location === "/" ? "active" : ""}>
              <Link
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                to="/"
              >
                <span aria-hidden="true">00</span>Home
              </Link>
            </li>
            <li className={location === "/destination" ? "active" : ""}>
              <Link
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                to="/destination"
              >
                <span aria-hidden="true">01</span>Destination
              </Link>
            </li>
            <li className={location === "/crew" ? "active" : ""}>
              <Link
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                to="/crew"
              >
                <span aria-hidden="true">02</span>Crew
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
