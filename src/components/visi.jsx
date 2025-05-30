import React from 'react'

function Visi() {
return (
    <div className="bg-gradient-to-b from-orange-100 to-white py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 relative">
                <span className="relative inline-block after:content-[''] after:absolute after:w-24 after:h-1 after:bg-amber-400 after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
                    Visi & Misi
                </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="bg-white p-10 rounded-2xl shadow-[0_20px_50px_rgba(146,_64,_14,_0.7)] hover:transform hover:-translate-y-2 transition-all duration-300">
                    <div className="flex items-center mb-8">
                        <span className="text-amber-500 text-4xl mr-4">⚡</span>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                            Visi
                        </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Menjadi platform e-commerce kopi terkemuka yang menghubungkan penikmat kopi dengan produk kopi berkualitas tinggi dari seluruh Nusantara.
                    </p>
                </div>
                <div className="bg-white p-10 rounded-2xl shadow-[0_20px_50px_rgba(146,_64,_14,_0.7)] hover:transform hover:-translate-y-2 transition-all duration-300">
                    <div className="flex items-center mb-8">
                        <span className="text-amber-500 text-4xl mr-4">🎯</span>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                            Misi
                        </h3>
                    </div>
                    <ul className="text-gray-700 space-y-4 text-lg">
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                            Menyediakan berbagai pilihan kopi berkualitas dari petani lokal
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                            Mendukung pertumbuhan industri kopi Indonesia
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                            Memberikan pengalaman berbelanja kopi yang mudah dan menyenangkan
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                            Mengedukasi masyarakat tentang kopi Nusantara
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)
}

export default Visi
