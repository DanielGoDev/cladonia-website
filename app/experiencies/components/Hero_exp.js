import Image from "next/image";

export default function Hero_exp() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      
      {/* IMAGEN */}
      <Image
        src="/images/exp_1.png"
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 hero-overlay"></div>


      {/* CONTENIDO */}
      <div className="relative z-10 h-full flex justify-center items-center mt-16">
        <div className="text-center max-w-7xl mx-auto px-6 pb-20 text-white">
          <h2 className="text-4xl md:text-6xl font-medium mb-4 tracking-widest text-white">
            Parque Natural Nacional
          </h2>

          <h1 className="text-8xl md:text-9xl font-bold leading-tight">
            CHINGAZA
          </h1>
          <p className="mt-4 max-w-1200px text-2xl md:text-2xl text-white/90 text-balance">
            Ven y vive esta maravillosa experiencia, acompañado de guias expertos
          </p>
        </div>
      </div>

    </section>
  );
}
