import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kopi Nusantara</h3>
            <p className="text-amber-200 text-sm">
              Menyajikan kopi terbaik dari berbagai penjuru Nusantara dengan
              kualitas premium dan cita rasa yang autentik.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2 text-amber-200 text-sm">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+62 812 3456 3332</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@kopinusantara.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Jl. parak palembang inilah </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-200 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-200 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-amber-800 text-center text-sm text-amber-300">
          <p>
            &copy; {new Date().getFullYear()} Kopi Nusantara. Hak Cipta
            Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
