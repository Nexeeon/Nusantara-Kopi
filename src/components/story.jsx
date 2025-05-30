import React from 'react'

function Story() {
  return (
    <section className="py-16 px-4 bg-orange-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">
              Cerita Kami
            </h2>
            <p className="text-gray-700 mb-4">
              Kopi Nusantara didirikan pada tahun 2015 oleh sekelompok pecinta
              kopi yang memiliki misi untuk memperkenalkan kekayaan cita rasa
              kopi Indonesia ke seluruh dunia.
            </p>
            <p className="text-gray-700 mb-4">
              Berawal dari sebuah kedai kecil di Jakarta, kami mulai menjelajahi
              berbagai daerah penghasil kopi di Indonesia untuk menemukan biji
              kopi terbaik dan menjalin kerjasama langsung dengan para petani
              lokal.
            </p>
            <p className="text-gray-700">
              Hari ini, Kopi Nusantara telah berkembang menjadi salah satu
              pemasok kopi premium terkemuka yang tetap menjunjung tinggi
              kualitas, keberlanjutan, dan kesejahteraan petani.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="./kopi-gayo.jpg"
              alt="Founders of Kopi Nusantara"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story
