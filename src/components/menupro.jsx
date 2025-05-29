import React from 'react'

function MenuPro() {
return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-orange-100">
        {[
          {
            name: "Arabica Coffee",
            image: "/coffeea.jpg",
            description: "Premium single-origin Arabica beans with a smooth, balanced flavor.",
            price: "95.000"
          },
          {
            name: "Robusta Coffee",
            image: "/pi.jpg",
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
            image: "/fe.jpg",
            description: "Classic Indonesian coffee with a sweet and clean taste.",
            price: "88.000"
          },
          {
            name: "Toraja Coffee",
            image: "/to.jpeg",
            description: "Complex and full-bodied coffee from Sulawesi.",
            price: "98.000"
          },
          {
            name: "Bali Kintamani",
            image: "/coffeea.jpg",
            description: "Citrusy and bright coffee from Bali highlands.",
            price: "92.000"
          },
          {
            name: "Aceh Gayo",
            image: "/pi.jpg",
            description: "Full-bodied coffee with herbal notes from Aceh.",
            price: "94.000"
          },
          {
            name: "Flores Bajawa",
            image: "ko.png",
            description: "Spicy and chocolate notes from Flores Island.",
            price: "89.000"
          },
          {
            name: "Papua Wamena",
            image: "co.jpg",
            description: "Exotic coffee with fruity notes from Papua.",
            price: "96.000"
          },
          {
            name: "Lampung Coffee",
            image: "/fe.jpg",
            description: "Bold and rich coffee from Lampung region.",
            price: "82.000"
          },
          {
            name: "Luwak Coffee",
            image: "/to.jpeg",
            description: "Premium Indonesian civet coffee.",
            price: "199.000"
          },
          {
            name: "Mandailing Coffee",
            image: "/coffeea.jpg",
            description: "Low acidity coffee with earthy notes.",
            price: "93.000"
          },
          {
            name: "Preanger Coffee",
            image: "/pi.jpg",
            description: "Classic West Java coffee with mild flavor.",
            price: "87.000"
          },
          {
            name: "Sidikalang Coffee",
            image: "ko.png",
            description: "Full-bodied coffee from North Sumatra.",
            price: "91.000"
          }
        ].map((coffee, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 relative">
            <div className="overflow-hidden rounded-md">
              <img
                src={coffee.image}
                alt={coffee.name}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
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
