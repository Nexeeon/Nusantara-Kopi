import React from "react";

function HerKo() {
  return (
    <div>
      <div className="min-h-screen bg-orange-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Hubungi Kami</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-amber-900">
                Kirim Pesan
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">Nama</label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Pesan</label>
                  <textarea className="w-full border rounded-md p-2 h-32"></textarea>
                </div>
                <button className="w-full bg-amber-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#7d6049] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#967259] focus:ring-opacity-50">
                  Kirim
                </button>
              </form>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-amber-900">
                Informasi Kontak
              </h2>
              <div className="space-y-4 ">
                <div>
                  <h3 className="font-semibold text-amber-900">Alamat</h3>
                  <p>Jl. Contoh No. 123, Kota, Provinsi</p>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900">Email</h3>
                  <p>info@nusantarakopi.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900">Telepon</h3>
                  <p>+62 123 4567 890</p>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900">
                    Jam Operasional
                  </h3>
                  <p>Senin - Minggu: 08:00 - 22:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HerKo;
