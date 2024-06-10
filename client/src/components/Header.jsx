import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import "../styles/Header.css";

export function Header() {
  const { currentUser } = useSelector(state => state.user);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__brand">
          <Link to="/">
            <img src="./public/img/Logo.png" alt="Company Logo" className="header__logo" />
          </Link>
        </div>
        <nav className={`header__nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="header__nav-list" onClick={closeMenu}>
            <Link to="/membership">
              <li className="header__nav-item header__nav-link">
                Membership
              </li>
            </Link>
            <Link to="/gallery">
              <li className="header__nav-item header__nav-link">
                Gallery
              </li>
            </Link>
            <Link to="/news">
              <li className="header__nav-item header__nav-link">
                News
              </li>
            </Link>
            <Link to="/contacts">
              <li className="header__nav-item header__nav-link">
                Contacts
              </li>
            </Link>
          </ul>
        </nav>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`burger ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`burger ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`burger ${isMenuOpen ? "open" : ""}`}></div>
        </div>
        <div className="header__signin">
          <Link to='/profile'>
            {currentUser ? (
              <img className="prof_pic_small" src={currentUser.profilePicture} alt='profile' />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
