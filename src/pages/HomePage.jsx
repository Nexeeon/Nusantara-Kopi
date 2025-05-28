import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/hero-section'
import Welcome from '../components/welcome'
import Product from '../components/Product'
import AboutMini from '../components/about-mini'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Welcome />
      <Product />
      <AboutMini />
      <Footer />
    </div>
  )
}


