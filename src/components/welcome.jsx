import React from 'react'

function Welcome() {
  return (
    <section className="bg-orange-100 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">
          Selamat Datang di Kopi Nusantara
        </h2>
        <p className="text-amber-800 max-w-3xl mx-auto">
          Kami menyediakan biji kopi berkualitas tinggi yang dipanen langsung
          dari berbagai daerah di Indonesia. Setiap biji kopi kami diproses
          dengan hati-hati untuk menghasilkan cita rasa yang autentik dan
          nikmat.
        </p>
        <div className="mt-8">
          <a
            href="/produk"
            className="inline-block bg-amber-700 hover:bg-amber-800 text-white py-2 px-6 rounded-md transition-colors"
          >
            Lihat semua tentang produk kami
          </a>
        </div>
      </div>
    </section>
  );
}

export default Welcome
