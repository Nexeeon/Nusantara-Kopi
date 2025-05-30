import React from 'react'

function HeTa() {
  return (
    <div className="w-full">
      <section className="relative h-[40vh] md:h-[40vh] w-full bg-black">
        <div className="absolute inset-0">
          <img src="./dy.jpeg" alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Tentang Kopi Nusantara
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-2xl">
              Perjalanan kami dalam menghadirkan kopi terbaik dari berbagai
              penjuru Nusantara
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeTa
