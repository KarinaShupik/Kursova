import React from "react"
import "../styles/Hero.css"
import Bird from "../img/bird.png"

export default function Hero() {
    return (
      <div className="hero">
        <div className="hero_container">
          <div className="hero_info">
            <h1 className="hero-title">WHERE CURIOUS MINDS MEET</h1>
            <p className="hero-subtitle">Nonstop learning community</p>
          </div>
          <button className="hero-button">Explore</button>
        </div>
      </div>
    )
  }
  