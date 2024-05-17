import React from "react"
import { Link } from "react-router-dom"
import "../styles/Header.css"

export function Header() {
  
    return (
        <header className="header">
        <div className="container">
          <div className="header__brand">
            <Link to="/">
                <img src="./public/img/Logo.png" alt="Company Logo" className="header__logo" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">Membership</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">Gallery</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">News</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">Contacts</a>
              </li>
            </ul>
          </nav>
          <div className="header__signin">
            
            <a href="/sign-in" className="header__signin-button">Sign In</a>
          </div>
        </div>
      </header>
    )
  }