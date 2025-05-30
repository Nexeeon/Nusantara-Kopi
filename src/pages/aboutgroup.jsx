import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeTa from '../components/herotentang'
import Story from '../components/story'
import Velue from '../components/velue'
import Proses from '../components/proses'
import Team from '../components/tim'

function AboutGroup() {
  return (
    <div>
      <NavBar />
        <HeTa />
          <Story />
          <Velue />
            <Proses />
            <Team />
      <Footer />
    </div>
  )
}

export default AboutGroup
