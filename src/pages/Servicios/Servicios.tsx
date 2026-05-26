import PasosSection from "../../components/sections/PasosSection/PasosSection";
import CTA from "../../components/sections/CTA/CTA";
import Hero from "../../components/sections/Hero/Hero";
import ModalidadesSection from "../../components/sections/ModalidadesSection/ModalidadesSection";
import TerapiasSection from "../../components/sections/TerapiasSection/TerapiasSection";
import "./Servicios.css";

export default function Servicios() {
  return (
    <div className="servicios">
      <Hero
        variant="servicios"
        title="Servicios"
        description="Acompañamiento psicológico profesional adaptado a tus necesidades."
      />

      <section className="servicios-content">
        <ModalidadesSection />
        <TerapiasSection />
        <PasosSection />
        <CTA
          title="¿Tienes dudas?"
          description="Estoy aquí para ayudarte. Contacta conmigo sin compromiso."
        />{" "}
      </section>
    </div>
  );
}
