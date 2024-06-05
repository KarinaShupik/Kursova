import React from "react"
import Hero from "../pages/Hero.jsx"
import Gallery from "../pages/Gallery.jsx"
import News from "../pages/News.jsx"
import NewsAdditional from "../pages/NewsAdditional.jsx"
import Customers from "../pages/Customers.jsx"
import ContactForm from "../pages/ContactForm.jsx"


export function Home() {
    return (
      <>
        <Hero />
        <Gallery />
        <News />
        <NewsAdditional />
        <Customers />
        <ContactForm />
      </>
    )
}