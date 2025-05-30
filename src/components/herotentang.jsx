import React from 'react'

function HeTa() {
  return (
    <div clas>
      <section className="relative h-[40vh] md:h-40vh] overflow-hidden  ">
        <div className="absolute inset-0 bg-black/80">
          <img src="./dy.jpeg" alt="" className="w-full object-cover" />
        </div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Tentang Kopi Nusantara
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-2xl ">
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
