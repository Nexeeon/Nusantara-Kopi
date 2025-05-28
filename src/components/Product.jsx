import React from 'react'

function Product() {
return (
        <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-orange-100">
                        <div className="bg-white rounded-lg shadow-md p-4 relative">
                                        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">HOT!</span>
                                        <img src="./coffeea.jpg" alt="Arabica Coffee" className="w-full h-48 object-cover rounded-md" />
                                        <h3 className="text-xl font-bold mt-2">Arabica Coffee</h3>
                                        <p className="text-gray-600">Premium single-origin Arabica beans with a smooth, balanced flavor.</p>
                                        <p className="text-lg font-semibold mt-2">Rp 95.000</p>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md p-4 relative">
                                        <span className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-md text-sm">Popular</span>
                                        <img src="/pi.jpg" alt="Robusta Coffee" className="w-full h-48 object-cover rounded-md" />
                                        <h3 className="text-xl font-bold mt-2">Robusta Coffee</h3>
                                        <p className="text-gray-600">Strong and full-bodied Robusta beans with intense flavor.</p>
                                        <p className="text-lg font-semibold mt-2">Rp 75.000</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-4">
                                        <img src="./ko.png" alt="House Blend" className="w-full h-48 object-cover rounded-md" />
                                        <h3 className="text-xl font-bold mt-2">House Blend</h3>
                                        <p className="text-gray-600">Our signature blend combining Arabica and Robusta beans.</p>
                                        <p className="text-lg font-semibold mt-2">Rp 85.000</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-4 relative">
                                        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">HOT!</span>
                                        <img src="/co.jpg" alt="Sumatra Coffee" className="w-full h-48 object-cover rounded-md" />
                                        <h3 className="text-xl font-bold mt-2">Sumatra Coffee</h3>
                                        <p className="text-gray-600">Rich and earthy flavors from the highlands of Sumatra.</p>
                                        <p className="text-lg font-semibold mt-2">Rp 90.000</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-4">
                                        <img src="/fe.jpg" alt="Java Coffee" className="w-full h-48 object-cover rounded-md" />
                                        <h3 className="text-xl font-bold mt-2">Java Coffee</h3>
                                        <p className="text-gray-600">Classic Indonesian coffee with a sweet and clean taste.</p>
                                        <p className="text-lg font-semibold mt-2">Rp 88.000</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-4 relative">
                                        <span className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-md text-sm">Popular</span>
                                        <img src="/to.jpeg" alt="Toraja Coffee" className="w-full h-48 object-cover rounded-md" />
                                        <h3 className="text-xl font-bold mt-2">Toraja Coffee</h3>
                                        <p className="text-gray-600">Complex and full-bodied coffee from Sulawesi.</p>
                                        <p className="text-lg font-semibold mt-2">Rp 98.000</p>
                        </div>
        </div>
        </div>
)
}

export default Product
