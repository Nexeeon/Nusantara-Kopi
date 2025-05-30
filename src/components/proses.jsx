import React from 'react'

function Proses() {
  return (
    <div>
      <section className="py-16 px-4 bg-orange-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-amber-900 mb-8 text-center">
            Proses Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-amber-700 flex items-center justify-center text-white text-2xl font-bold mx-auto">
                  1
                </div>
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Seleksi Biji Kopi
              </h3>
              <p className="text-gray-600">
                Kami memilih biji kopi terbaik langsung dari petani di berbagai
                daerah di Indonesia.
              </p>
            </div>
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-amber-700 flex items-center justify-center text-white text-2xl font-bold mx-auto">
                  2
                </div>
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Proses Sangrai
              </h3>
              <p className="text-gray-600">
                Biji kopi disangrai dengan hati-hati untuk menghasilkan profil
                rasa yang optimal.
              </p>
            </div>
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-amber-700 flex items-center justify-center text-white text-2xl font-bold mx-auto">
                  3
                </div>
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Pengiriman Segar
              </h3>
              <p className="text-gray-600">
                Kopi dikirim dalam kemasan khusus untuk menjaga kesegaran hingga
                sampai ke tangan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Proses
