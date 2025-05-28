import React from 'react'
import NavBar from './components/NavBar'
import { Home } from 'lucide-react'
import HeroSection from './components/hero-section'
import Welcome from './components/welcome'
import Product from './components/Product'
import Footer from './components/Footer'
import AboutMini from './components/about-mini'

function App() {
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

export default App
