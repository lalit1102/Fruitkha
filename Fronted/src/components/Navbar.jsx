import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../assets/assets";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "News", path: "/news" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={images.logo} alt="FruitKha Logo" width="150" />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#fruitkhaNavbar"
          aria-controls="fruitkhaNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="fruitkhaNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navLinks.map((link, i) => (
              <li className="nav-item" key={i}>
                <Link className="nav-link" to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side: Search + Login */}
          <div className="d-flex align-items-center gap-2 position-relative">
            {/* Search */}
            <div
              className="d-flex align-items-center position-relative"
              onMouseEnter={() => setShowSearch(true)}
              onMouseLeave={() => setShowSearch(false)}
            >
              <i className="fas fa-search fs-5 cursor-pointer"></i>
              {showSearch && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control ms-2"
                  style={{ width: "200px", transition: "0.3s" }}
                />
              )}
            </div>

            {/* Login Button */}
            <button
              className="btn btn-primary"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;