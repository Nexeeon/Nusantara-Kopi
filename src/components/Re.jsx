import React from 'react'

function Re() {
return (
    <div className='bg-amber-100'>
        <div className="container mx-auto px-4 py-8 bg-orange-100">
            <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { name: 'Ahmad Dhani', review: "Kopi yang sempurna untuk memulai hari. Aromanya sangat harum!" },
                    { name: 'Budi Santoso', review: "Rasanya begitu authentic, mengingatkan saya akan kopi tradisional." },
                    { name: 'Citra Dewi', review: "Pelayanan sangat ramah dan kopi selalu fresh setiap hari." },
                    { name: 'Dian Sastro', review: "Menu favorit saya adalah kopi susu, sangat creamy dan pas." },
                    { name: 'Eko Prasetyo', review: "Tempat yang cozy dan nyaman untuk meeting atau kerja." },
                    { name: 'Fira Basuki', review: "Harga terjangkau dengan kualitas premium. Worth it!" },
                    { name: 'Gunawan', review: "Cold brew-nya juara, tidak terlalu asam dan sangat smooth." },
                    { name: 'Hadi Wijaya', review: "Variety kopi lokalnya lengkap dan berkualitas tinggi." },
                    { name: 'Indah Permata', review: "Saya suka interior café-nya yang Instagram-worthy." },
                    { name: 'Julia Perez', review: "Best coffee shop in town! Selalu konsisten rasanya." },
                    { name: 'Kartika Sari', review: "Barista-nya sangat knowledgeable tentang kopi." },
                    { name: 'Lukman Hakim', review: "Espresso shot-nya perfect, tidak over-extracted." },
                    { name: 'Maya Angela', review: "Suka banget sama latte art-nya yang selalu cantik." },
                    { name: 'Nina Zatulini', review: "Menu makanannya juga enak, cocok didampingi kopi." },
                    { name: 'Oscar Lawalata', review: "Tempat favorit untuk coffee cupping dan belajar kopi." }
                ].map(({name, review}, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="text-yellow-400">★★★★★</div>
                            <span className="ml-2 text-gray-600">{name}</span>
                        </div>
                        <p className="text-gray-700">"{review}"</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
)
}

export default Re
