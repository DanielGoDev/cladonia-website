import Hero from "@/sections/Hero";
import Header from "@/components/ui/Header";
import Bridge from "@/components/ui/Bridge";
import Experiencies from "@/sections/Experiencies";
import Events from "@/sections/Events";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Bridge_reserv from "@/components/ui/Bridge_reserv";


export default function Home() {
  return (
      <main>
          <Header />
          <Hero />
          <Bridge text="Conoce lo que hacemos" />  
          <Experiencies />
          <Bridge text="Vive experiencias únicas" />
          <Events />
          <Bridge text="Descubre quienes somos" />
          <About />
          <Bridge text="Contacta con nosotros" />
          <Contact />
          <Bridge_reserv text="Comienza tu próxima aventura" />
      </main>
  );
}
