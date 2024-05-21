import React from "react"
import { Link, useNavigate } from "react-router-dom"
import '../styles/SignUp.css'
import { useState } from 'react'

export function SignIn() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(false)
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      setLoading(false)
      if(data.success === false){
        setError(true)
        return;
      }
      navigate('/')
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

    return (
      <div className="sign-up_container">
        <h1 className="page_title">Sign In</h1>
        <form onSubmit={handleSubmit} className="sign-up_form">
          <input type="email" placeholder="Email" id="email" className="email_input" onChange={handleChange}/>
          <input type="password" placeholder="Password" id="password" className="password_input" onChange={handleChange}/>
          <button disabled={loading} className="sign-up_btn">
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>
        <div className="add_info_sign-up">
          <p>Dont have an account?</p>
          <Link to="/sign-up">
            <span className="sign-in_link">Sign Up</span>
          </Link>
        </div>
        <p className='err_message'>{error && 'Something went wrong!'}</p>
      </div>
    )
  }
  