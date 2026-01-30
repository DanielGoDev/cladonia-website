export default function Contact() {
    return (
        <section className="relative w-screen min-h-160 bg-black text-white py-12 md:py-20">  
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 md:mb-24">Contacto</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-sm md:max-w-none mx-auto">
                    <div className="bg-gray-800 p-4 md:p-6 rounded-lg text-center aspect-square flex flex-col justify-center">
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Teléfono</h3>
                        <p className="text-gray-300 text-sm md:text-base">+57 300 123 4567</p>
                    </div>
                    <div className="bg-gray-800 p-4 md:p-6 rounded-lg text-center aspect-square flex flex-col justify-center">
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Email</h3>
                        <p className="text-gray-300 text-sm md:text-base">info@cladonia.com</p>
                    </div>
                    <div className="bg-gray-800 p-4 md:p-6 rounded-lg text-center aspect-square flex flex-col justify-center">
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Ubicación</h3>
                        <p className="text-gray-300 text-sm md:text-base">Bogotá, Colombia</p>
                    </div>
                </div>
            </div>
        </section>                          
    )
    
}