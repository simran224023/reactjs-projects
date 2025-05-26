import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          {/* Logo on left */}
          <Link to="/" className="logo-container">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="logo"
              alt="Logo"
            />
          </Link>
          
          {/* Navigation links in center */}
          <div className={`menu ${isMenuOpen ? 'active' : ''}`} id="mobile-menu-2">
            <ul className="menu-list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `menu-item ${isActive ? "active" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `menu-item ${isActive ? "active" : ""}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `menu-item ${isActive ? "active" : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `menu-item ${isActive ? "active" : ""}`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Auth buttons on right */}
          <div className="right-section">
            {/* Hamburger menu toggle - only visible on mobile */}
            <div className="menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            
            <div className="action-buttons">
              <Link to="#" className="login-button">
                Log in
              </Link>
              <Link to="#" className="get-started-button">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}