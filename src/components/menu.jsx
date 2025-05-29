import React from 'react'

function Menu() {
return (
    <div className="bg-amber-900 py-5">
        <div className='py-15'> 

        <h2 className="text-3xl font-bold text-white text-center ">Produk Kopi Kami  </h2>
        <p className='flex justify-center items-center gap-4 text-amber-200'>produk yang  bisa kami tawarkan kepada anda </p>
        </div>
       
        <div className="flex items-center justify-center p-20">
            
            <div className="relative">
                <input
                    type="text"
                    placeholder="Cari menu..."
                    className="w-200 px-4 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-brown-500" // Changed from w-64 to w-96
                />
                <button className="absolute right-3 top-2">
                    <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
)
}

export default Menu
