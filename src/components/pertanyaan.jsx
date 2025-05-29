import React from 'react'

function Pertanyaan() {
  return (
    <div>
      <section className="py-16 px-4 bg-orange-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-amber-900 mb-8 text-center">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Bagaimana cara memesan kopi?
              </h3>
              <p className="text-gray-600">
                Anda dapat memesan kopi kami melalui website ini, menghubungi
                kami via telepon, atau mengunjungi toko kami secara langsung.
                Kami juga menerima pesanan grosir untuk kafe dan restoran.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Berapa lama pengiriman kopi?
              </h3>
              <p className="text-gray-600">
                Untuk wilayah Jakarta dan sekitarnya, pengiriman biasanya
                memakan waktu 1-2 hari kerja. Untuk wilayah lain di Indonesia,
                pengiriman memakan waktu 3-5 hari kerja tergantung lokasi.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Apakah ada biaya pengiriman?
              </h3>
              <p className="text-gray-600">
                Ya, biaya pengiriman ditentukan berdasarkan lokasi pengiriman
                dan berat pesanan. Untuk pembelian di atas Rp 500.000, kami
                memberikan gratis ongkos kirim untuk wilayah Jakarta.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Bagaimana cara penyimpanan kopi yang benar?
              </h3>
              <p className="text-gray-600">
                Simpan kopi dalam wadah kedap udara, jauhkan dari sinar matahari
                langsung, panas, dan kelembaban. Hindari menyimpan kopi di dalam
                kulkas karena dapat menyerap bau dan kelembaban.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pertanyaan
