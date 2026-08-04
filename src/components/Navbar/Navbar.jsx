import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import assets from "../../assets/assets";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img src={assets.logo} alt="Logo" />
        </Link>

        <div className="ham-burger" onClick={toggleMenu}>
          <span>&#9776;</span>
        </div>
      </div>

      <div className={`navbar-right ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" && !location.hash ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "/", hash: "#about_us" }}
              className={location.hash === "#about_us" ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "/", hash: "#our_work" }}
              className={location.hash === "#our_work" ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Work
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "/", hash: "#ongoing" }}
              className={location.hash === "#ongoing" ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              Ongoing Activities
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className={location.pathname === "/team" ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>

            <div className="dropdown-content">
              <Link
                to="/team/2024"
                className={
                  location.pathname === "/team/2024"
                    ? "active dropmenu"
                    : "dropmenu"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                2025
              </Link>
              <Link
                to="/team/alumni"
                className={
                  location.pathname === "/team/alumni"
                    ? "active dropmenu"
                    : "dropmenu"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Alumni
              </Link>
            </div>
          </li>
          <li>
            <Link
              to="/projects"
              className={location.pathname === "/projects" ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={location.pathname === "/blog" ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "/", hash: "#contact" }}
              className={location.hash === "#contact" ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
