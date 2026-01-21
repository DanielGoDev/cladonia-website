export default function Hero() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      
      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute h-full w-full object-cover object-center"
        src="/video/hero-video.mp4"
      />

      <div className="absolute inset-0 hero-overlay"></div>


      {/* CONTENIDO */}
      <div className="relative z-10 h-full flex items-end justify-center">
        <div className="text-center max-w-7xl mx-auto px-6 pb-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Explora reservas naturales
          </h1>
          <p className="mt-4 max-w-1200px text-lg text-white/90">
            Cada sendero invita a descubrir la riqueza de la biodiversidad en compañía de guías expertos.<br />Un recorrido único donde la tranquilidad del bosque y la majestuosidad de su fauna se convierten en protagonistas.
          </p>
        </div>
      </div>

    </section>
  );
}
