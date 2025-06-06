import React from 'react'

function MenuPro() {
return (
    <div className='bg-orange-100'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4  min-h-screen max-w-7xl mx-auto">
        {[
          {
            name: "Arabica Coffee",
            image: "/ar.jpg",
            description: "Premium single-origin Arabica beans with a smooth, balanced flavor.",
            price: "95.000"
          },
          {
            name: "Robusta Coffee",
            image: "/rbb.jpg",
            description: "Strong and full-bodied Robusta beans with intense flavor.",
            price: "75.000"
          },
          {
            name: "House Blend",
            image: "ko.png",
            description: "Our signature blend combining Arabica and Robusta beans.",
            price: "85.000"
          },
          {
            name: "Sumatra Coffee",
            image: "co.jpg",
            description: "Rich and earthy flavors from the highlands of Sumatra.",
            price: "90.000"
          },
          {
            name: "Java Coffee",
            image: "/jj.webp",
            description: "Classic Indonesian coffee with a sweet and clean taste.",
            price: "88.000"
          },
          {
            name: "Toraja Coffee",
            image: "/tj.jpg",
            description: "Complex and full-bodied coffee from Sulawesi.",
            price: "98.000"
          },
          {
            name: "Bali Kintamani",
            image: "/hh.jpg",
            description: "Citrusy and bright coffee from Bali highlands.",
            price: "92.000"
          },
          {
            name: "Aceh Gayo",
            image: "/gy.jpg",
            description: "Full-bodied coffee with herbal notes from Aceh.",
            price: "94.000"
          },
          {
            name: "Flores Bajawa",
            image: "bj.jpg",
            description: "Spicy and chocolate notes from Flores Island.",
            price: "89.000"
          },
          {
            name: "Papua Wamena",
            image: "wm.jpg",
            description: "Exotic coffee with fruity notes from Papua.",
            price: "96.000"
          },
          {
            name: "Lampung Coffee",
            image: "/lp.jpg",
            description: "Bold and rich coffee from Lampung region.",
            price: "82.000"
          },
          {
            name: "Luwak Coffee",
            image: "/lw.jpg",
            description: "Premium Indonesian civet coffee.",
            price: "199.000"
          },
          {
            name: "Mandailing Coffee",
            image: "/md.png",
            description: "Low acidity coffee with earthy notes.",
            price: "93.000"
          },
          {
            name: "Preanger Coffee",
            image: "/jv.jpg",
            description: "Classic West Java coffee with mild flavor.",
            price: "87.000"
          },
          {
            name: "Sidikalang Coffee",
            image: "sd.jpg",
            description: "Full-bodied coffee from North Sumatra.",
            price: "91.000"
          }
        ].map((coffee, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 relative">
            <div className="overflow-hidden rounded-md">
              <img
                src={coffee.image}
                alt={coffee.name}
                className="w-full h-57 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-bold mt-2">{coffee.name}</h3>
            <p className="text-gray-600 min-h-[60px]">{coffee.description}</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">Rp {coffee.price}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                Beli
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPro
