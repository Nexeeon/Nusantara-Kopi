import React from 'react'

function HeroSection() {
  return (
    <section className="relative h-[50vh] md:h-40vh] overflow-hidden">
      <div className="absolute inset-0">
        <img src="./KOpi.jpg" alt="" className='w-full object-cover' />
      </div>
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Kopi Nusantara
          </h1>
          <p className="text-lg md:text-xl text-amber-100 max-w-2xl">
            Nikmati cita rasa kopi terbaik dari berbagai penjuru Indonesia
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection
