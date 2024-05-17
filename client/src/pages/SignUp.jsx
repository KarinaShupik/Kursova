import React from "react"
import { Link } from "react-router-dom"
import '../styles/SignUp.css'

export function SignUp() {
    return (
      <div className="sign-up_container">
        <h1 className="page_title">Sign Up</h1>
        <form className="sign-up_form">
          <input type="text" placeholder="Username" id="username" className="username_input"/>
          <input type="email" placeholder="Email" id="email" className="email_input"/>
          <input type="password" placeholder="Password" id="password" className="password_input"/>
          <button className="sign-up_btn">Sign Up</button>
        </form>
        <div className="add_info_sign-up">
          <p>Have an account</p>
          <Link to="/sing-in">
            <span className="sign-in_link">Sign In</span>
          </Link>
        </div>
      </div>
    )
  }
  