"use client";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const events = [
    {
      image: "/images/img_1.png",
      title: "CHINGAZA",
      description: "Recorre senderos milenarios siguiendo las huellas de nuestros ancestros. Descubre petroglifos, plantas medicinales y la sabiduría de los pueblos originarios en una experiencia transformadora."
    },
    {
      image: "/images/img_1.png",
      title: "CHINGAZA",
      description: "Encuentra la paz interior en medio de la naturaleza. Sesión de meditación guiada junto a cascadas naturales, respiración consciente y conexión profunda con el entorno."
    },
    {
      image: "/images/img_1.png",
      title: "CHINGAZA",
      description: "Explora la vida nocturna del bosque bajo un cielo estrellado. Avista fauna nocturna, escucha los sonidos de la noche y aprende sobre astronomía en un ambiente mágico."
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % events.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + events.length) % events.length);
  };

  const getPrevIndex = () => (currentImage - 1 + events.length) % events.length;
  const getNextIndex = () => (currentImage + 1) % events.length;
  return (
    <section className="top-0 relative w-full bg-black py-2 text-white">
      
      {/* TITULO */}
      <div className="text-center mb-12">
        <div className="top-0 flex flex-col items-center space-y-8"  >   
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Parque Natural Nacional
            </h2>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-semibold">
            {events[currentImage].title}
            </h2>
        </div> 
      </div>

      {/* SLIDER */}
      <div className="relative w-full flex items-center justify-center">
        
        {/* Flecha izquierda */}
        <button onClick={prevImage} className="absolute left-6 z-20 text-white/30 hover:text-white/60 text-6xl">
          ‹
        </button>

        {/* IMAGEN ANTERIOR */}
        <div className="relative w-1/4 h-32 md:h-48 lg:h-64 rounded-lg overflow-hidden opacity-60">
          <Image
            src={events[getPrevIndex()].image}
            alt="Imagen anterior"
            fill
            className="object-cover"
          />
        </div>

        {/* IMAGEN PRINCIPAL */}
        <div className="relative w-full h-56 md:h-72 lg:h-136
         rounded-xl overflow-hidden shadow-xl z-10">
          <Image
            src={events[currentImage].image}
            alt="Evento"
            fill
            className="object-cover"
          />
        </div>

        {/* IMAGEN SIGUIENTE */}
        <div className="relative w-1/4 h-32 md:h-48 lg:h-64 rounded-lg overflow-hidden opacity-60">
          <Image
            src={events[getNextIndex()].image}
            alt="Imagen siguiente"
            fill
            className="object-cover"
          />
        </div>

        {/* Flecha derecha */}
        <button onClick={nextImage} className="absolute right-6 z-20 text-white/30 hover:text-white/60 text-6xl">
          ›
        </button>

      </div>

      {/* DESCRIPCIÓN */}
      <p className="absolute z-10 mt-10 max-w-2xl mx-auto text-center text-xs md:text-sm lg:text-base text-white/70 px-4">
        {events[currentImage].description}
      </p>

    </section>
  );
}
