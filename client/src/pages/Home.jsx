import React from "react"
import hero from "../img/hero_img.png"
import "../styles/Home.css"

export function Home() {
    return (
      <div className="hero">
        <div className="hero_container">
          <h1 className="hero-title">WHERE CURIOUS MINDS MEET</h1>
          <p className="hero-subtitle">Nonstop learning, community</p>
          <button className="hero-button">Explore</button>
        </div>
      </div>
    )
  }
  