<<<<<<< HEAD
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Product from '../components/Product'
=======
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
>>>>>>> 2c5be30542cce8a9b3fd1861a14264b09b414232

function Produk() {
  const daftarProduk = [
    {
      nama: 'Kopi Gayo',
      deskripsi: 'Kopi arabika dari dataran tinggi Gayo, Aceh dengan cita rasa kuat dan aroma floral.',
      harga: 'Rp 85.000',
      gambar: '/public/kopi-gayo.jpg',
    },
    {
      nama: 'Kopi Toraja',
      deskripsi: 'Kopi Toraja dari Sulawesi dengan rasa earthy dan hint coklat yang mendalam.',
      harga: 'Rp 90.000',
      gambar: '/public/kopi-toraja.jpg',
    },
    {
      nama: 'Kopi Kintamani',
      deskripsi: 'Kopi khas Bali dengan keasaman cerah dan aroma jeruk yang menyegarkan.',
      harga: 'Rp 80.000',
      gambar: '/public/kopi-kintamani.jpg',
    },
  ];

  return (
    <div className="bg-[#f7f1ea] min-h-screen">
      <NavBar />
<<<<<<< HEAD
      <Product /> 
=======
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-[#4e342e] mb-8">Produk Kopi Nusantara</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {daftarProduk.map((produk, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={produk.gambar}
                alt={produk.nama}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-[#5d4037] mb-2">{produk.nama}</h2>
                <p className="text-gray-700 text-sm mb-2">{produk.deskripsi}</p>
                <p className="text-[#3e2723] font-bold">{produk.harga}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
>>>>>>> 2c5be30542cce8a9b3fd1861a14264b09b414232
      <Footer />
    </div>
  );
}

export default Produk;
