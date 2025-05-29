import React from 'react'

function AboutMini() {
return (
    <div className=" py-10 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 bg-amber-800">
        <img 
            src="/hot-co.jpg" 
            alt="" 
            className='w-full md:w-1/3 rounded-md object-cover max-w-sm'
        />
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-amber-200">Tentang Kopi</h2>
            <p className="text-amber-200 leading-relaxed max-w-lg">
                Kopi adalah minuman yang dibuat dari biji kopi yang telah dipanggang dan digiling.
                Memiliki rasa yang khas dan aroma yang menggoda, kopi telah menjadi bagian penting
                dari budaya minum di seluruh dunia. Setiap biji kopi memiliki karakteristik dan
                cita rasa unik yang dipengaruhi oleh daerah asalnya.
            </p>
        </div>
    </div>
)
}

export default AboutMini
