import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Header from '../components/headerkontak';
import HerKo from '../components/hero-kontak';
import Pertanyaan from '../components/pertanyaan';

function Kontak() {
  return (
    <div>
      <NavBar />
        <Header />
          <HerKo />
        <Pertanyaan />
      <Footer />
    </div>
  );
}

export default Kontak;