import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Kontak() {
  return (
    <div>
      <NavBar />

      <div className="bg-amber-900 min-h-screen text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 border-b border-amber-700 pb-2">Hubungi Kami</h1>
          <p className="mb-6 text-lg">
            Kami senang mendengar dari Anda. Silakan hubungi kami melalui informasi di bawah ini:
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Kontak;