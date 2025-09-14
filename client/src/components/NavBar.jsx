import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const NavBar = () => {
  const [userletter, setUserletter] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const username = localStorage.getItem("username");
    const userletters = username ? username.slice(0, 3).toUpperCase() : "";
    setUserletter(userletters);
  }, [userId]);

  return (
    <div>
      <nav className="navbar">
        <div className="nav1 flex flex-row justify-between items-center mx-6 px-4 py-4">
          {/* Logo */}
          <h1 className="logo text-2xl md:text-3xl font-bold text-blue-400">
            FilmRate
          </h1>

          {/* Desktop Links */}
          <div className="nav-content hidden md:flex flex-row gap-16 items-center">
            <ul className="nav-links flex gap-10 text-lg">
              <li>
                <Link
                  className="links hover:text-blue-400 text-white"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="links hover:text-blue-400 text-white"
                  to="/movies"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  className="links hover:text-blue-400 text-white"
                  to="/"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="links hover:text-blue-400 text-white"
                  to="/"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Login/Profile */}
          <div className="hidden md:flex">
            {localStorage.getItem("username") ? (
              <Link
                className="login-btn bg-blue-600 p-2 md:p-3 text-sm md:text-md rounded-md hover:bg-blue-700 text-white flex flex-row gap-1"
                to={`/profile/${userId}`}
              >
                <User />
                {userletter}
              </Link>
            ) : (
              <Link
                className="login-btn bg-blue-600 p-2 md:p-3 text-sm md:text-md rounded-md hover:bg-blue-700 text-white"
                to="/login"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <div
              className="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="mobile-menu md:hidden">
            <ul className="flex flex-col items-center gap-4 text-lg">
              <li>
                <Link
                  className="links hover:text-blue-400 text-white"
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="links hover:text-blue-400 text-white"
                  to="/movies"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  className="links hover:text-blue-400 text-white"
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="links hover:text-blue-400 text-white"
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Community
                </Link>
              </li>
            </ul>
            {localStorage.getItem("username") ? (
              <Link
                className="login-btn bg-blue-600 p-2 text-sm rounded-md hover:bg-blue-700 text-white flex flex-row gap-1 mt-3"
                to={`/profile/${userId}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <User />
                {userletter}
              </Link>
            ) : (
              <Link
                className="login-btn bg-blue-600 p-2 text-sm rounded-md hover:bg-blue-700 text-white mt-3"
                to="/login"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
