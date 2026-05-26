import "./Contacto.css";
import Hero from "../../components/sections/Hero/Hero";
import ContactForm from "../../components/sections/ContactForm/ContactForm";
import ContactoInfo from "../../components/sections/ContactoInfo/ContactoInfo";
import FAQsection from "../../components/sections/FAQsection/FAQsection";

export default function Contacto() {


  return (
    <div className="contacto">
      <Hero
        variant="contacto"
        title="Contacto"
        description="Estoy aquí para ayudarte. Da el primer paso hacia tu bienestar emocional."
      />
      
      <div className="contacto-content">
        <section className="contacto-content-top reveal-item">
            <ContactoInfo />
            <ContactForm />
        </section>
        <FAQsection />
      </div>
    </div>
  );
}
