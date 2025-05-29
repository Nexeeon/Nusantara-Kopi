import React from 'react'

function Menu() {
return (
    <div className="bg-amber-900 py-15">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Produk Kami</h2>
            <p className='text-yellow-100 mb-4'>produk yang kami tawarkan pada konsumen</p>
        </div>
        <div className="max-w-md mx-auto">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search coffee products..."
                    className="w-full px-4 py-2 rounded-lg border border-amber-700 bg-amber-800 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
);
}

export default Menu
