import React from 'react'
import { Coffee, Leaf, Users, Award } from 'lucide-react'

function Velue() {
  return (
    <section className="py-16 px-4 bg-amber-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-amber-900 mb-8 text-center">
          Nilai-nilai Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center p-3 bg-amber-200 rounded-full mb-4">
              <Coffee className="h-6 w-6 text-amber-800" />
            </div>
            <h3 className="text-lg font-semibold text-amber-900 mb-2">
              Kualitas Premium
            </h3>
            <p className="text-gray-600">
              Kami hanya menyediakan biji kopi terbaik yang dipilih dengan
              teliti.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center p-3 bg-amber-200 rounded-full mb-4">
              <Leaf className="h-6 w-6 text-amber-800" />
            </div>
            <h3 className="text-lg font-semibold text-amber-900 mb-2">
              Keberlanjutan
            </h3>
            <p className="text-gray-600">
              Praktik pertanian yang ramah lingkungan dan berkelanjutan.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center p-3 bg-amber-200 rounded-full mb-4">
              <Users className="h-6 w-6 text-amber-800" />
            </div>
            <h3 className="text-lg font-semibold text-amber-900 mb-2">
              Kemitraan
            </h3>
            <p className="text-gray-600">
              Kerjasama yang adil dan menguntungkan dengan petani lokal.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center p-3 bg-amber-200 rounded-full mb-4">
              <Award className="h-6 w-6 text-amber-800" />
            </div>
            <h3 className="text-lg font-semibold text-amber-900 mb-2">
              Autentisitas
            </h3>
            <p className="text-gray-600">
              Menjaga keaslian cita rasa kopi dari setiap daerah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Velue
