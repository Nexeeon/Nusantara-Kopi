import React from 'react'

function Team() {
return (
    <section className="py-16 px-4 bg-amber-100">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-900 mb-8 text-center">
                Kelompok 1 Sintax
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img
                        src="./foto-calvin.jpeg"
                        alt="calvin"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-amber-900">
                            Calvin Damanik
                        </h3>
                        
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img
                        src="./gambartim2.jpeg"
                        alt="sutan"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-amber-900">
                            Sutan Akbar Dwi Nugraha
                        </h3>
                        
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img
                        src="./gambartim3.jpeg"
                        alt="annisa"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-amber-900">
                            Annisa Urahmi
                        </h3>
                        
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img
                        src="./gambartim1.jpeg"
                        alt="Aisyah"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-amber-900">
                            Aisyah Arianti
                        </h3>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
);
}

export default Team
