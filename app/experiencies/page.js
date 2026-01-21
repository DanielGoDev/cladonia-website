import Hero_exp from "@/app/experiencies/components/Hero_exp";
import Header from "@/components/ui/Header";
import Bridge from "@/components/ui/Bridge";
import Card from "@/components/ui/Card";
import Bridge_reserv from "@/components/ui/Bridge_reserv";
import About from "@/app/experiencies/sections/About";

export default function ExperiencesPage() {
    const experiences = [
        {
            title: "Parque Natural Nacional Chingaza",
            description: "Descubre páramos únicos, lagunas cristalinas y frailejones centenarios. Camina por senderos que conectan ecosistemas de alta montaña. Una experiencia de biodiversidad incomparable a 3.000 metros de altura.",
            image: "/images/img_1.png"
        },
        {
            title: "Reserva Natural El Zoque", 
            description: "Sumérgete en bosques de niebla y observa más de 200 especies de aves endémicas. Recorre senderos ecológicos mientras aprendes sobre conservación. Perfecto para conectar con la naturaleza virgen.",
            image: "/images/img_2.png"
        },
        {
            title: "Tour Fotográfico",
            description: "Captura la magia de paisajes únicos con técnicas profesionales de fotografía. Aprende composición, manejo de luz natural y secretos para retratar fauna salvaje. Incluye equipo especializado y guía experto.",
            image: "/images/img_3.png"
        }
    ];

    return (
        <main>
            <Header />
            <Hero_exp />
            <Bridge text="Conoce este mágico lugar" />
            <About />
            <Bridge_reserv text="Reserva tu experiencia favorita" />
        </main>
    );
}