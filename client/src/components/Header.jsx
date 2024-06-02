import React from "react"
import { Link } from "react-router-dom"
import "../styles/Header.css"
import { useSelector } from 'react-redux'

export function Header() {
  const {currentUser} = useSelector(state => state.user)
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
              <Link to="#" >
                <li className="header__nav-item header__nav-link">
                  Membership
                </li>
              </Link>
              <Link to="#" >
                <li className="header__nav-item header__nav-link">
                  Gallery
                </li>
              </Link>
              <Link to="#" >
                <li className="header__nav-item header__nav-link">
                  News
                </li>
              </Link>
              <Link to="#" >
                <li className="header__nav-item header__nav-link">
                  Contacts
                </li>
              </Link>
            </ul>
          </nav>
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
    )
  }