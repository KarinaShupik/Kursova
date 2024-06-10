import React from "react"
import Hero from "../pages/Hero.jsx"
import Gallery from "../pages/Gallery.jsx"
import GeneralNews from "../pages/GeneralNews.jsx"
import Customers from "../pages/Customers.jsx"
import ContactForm from "../pages/ContactForm.jsx"
import LocationInfo from "../pages/LocationInfo.jsx"


export function Home() {
    return (
      <div className="main_container">
        <Hero />
        <Gallery />
        <GeneralNews />
        <Customers />
        <ContactForm />
        <LocationInfo />
      </div>
    )
}