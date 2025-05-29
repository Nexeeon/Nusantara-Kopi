import { CodeXml, Coffee, Menu, ShoppingCart } from "lucide-react";
import React, { useState } from "react";

function NavBar() {
  const [IsNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="sticky top-0  bg-amber-900  z-50">
      <div className="flex max-w-7xl px-4 mx-auto justify-between h-16 items-center text">
        <a href="/">
          <div className="flex items-center gap-2 text-white">
            <Coffee />
            <h1 className="">Nusantara coffee</h1>
          </div>
        </a>

        {/* Dekstop Nav */}
        <ul className="hidden md:flex gap-8 ">
          <li>
            <a
              href="/"
              className="hover:bg-amber-700 text-white py-3 px-4 rounded-md"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="/tentang"
              className="hover:bg-amber-700 text-white py-3 px-4 rounded-md"
            >
              Tentang Kami
            </a>
          </li>
          <li>
            <a
              href="/kontak"
              className="hover:bg-amber-700 text-white py-3 px-4 rounded-md"
            >
              Kontak
            </a>
          </li>
          <li>
            <a
              href="/produk"
              className="hover:bg-amber-700 text-white py-3 px-4 rounded-md"
            >
              Product
            </a>
          </li>
        </ul>

       
        {/* Hamburger Menu Icon */}
        <button className="md:hidden text-white" onClick={() => setIsNavOpen(!IsNavOpen)}>
          <Menu size={32} />
        </button>
      </div>

      {/* Nav Mobile Menu */}
      {IsNavOpen && (
        <ul className="w-full p-4 space-y-4 text-white ">
          <li>
            <a href="/">Beranda</a>
          </li>
          <li>
            <a href="/tentang">Tentang</a>
          </li>
          <li>
            <a href="/kontak">Kontak</a>
          </li>
          <li>
            <a href="/produk">Product</a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default NavBar;
