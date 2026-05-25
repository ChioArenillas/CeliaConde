import "./Contacto.css";
import { FAQs, InfoContacto } from "../../data/data";
import { FaWhatsapp } from "react-icons/fa";
import Hero from "../../components/Hero/Hero";
import Button from "../../components/Buttons/Buttons";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function Contacto() {

  const preguntas = FAQs.map((FAQ) => {
    return (
      <div className="faq-item" key={FAQ.id}>
        <h3>{FAQ.title}</h3>
        <p> {FAQ.description}</p>
      </div>
    );
  });

  return (
    <div className="contacto">
      <Hero
        variant="contacto"
        title="Contacto"
        description="Estoy aquí para ayudarte. Da el primer paso hacia tu bienestar emocional."
      />
      
      <div className="contacto-content">
        <section className="contacto-content-top reveal-item">
          <div className="contacto-info">
            <h2>Información de Contacto</h2>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h3>Teléfono</h3>
                <p>
                  <a href={InfoContacto.phoneLink}>{InfoContacto.phone}</a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>
                  <a href={InfoContacto.emailLink}>{InfoContacto.email}</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕐</div>
              <div>
                <h3>Horario</h3>
                <p>
                  Lunes a Viernes: 9:00 - 20:00
                  <br />
                  Sábados: Con cita previa
                </p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Dirección</h3>
                <p>
                  {" "}
                  <a
                    href={InfoContacto.addressLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {InfoContacto.address}
                  </a>
                </p>
              </div>
            </div>
            <div className="map-wrapper">
              <iframe
                className="map"
                src={InfoContacto.mapLink}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="whatsapp-fixed">
              <Button
                buttonClass="whatsapp-btn"
                buttonLink={InfoContacto.whatsappLink}
                buttonText={
                  <>
                    <span className="whatsapp-icon">
                      <FaWhatsapp size={28} />
                    </span>{" "}
                    Contactar por WhatsApp
                  </>
                }
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
            <ContactForm />
        </section>
        <section className="faq-section reveal-item">
          <h2>Preguntas Frecuentes</h2>
          <div className="faq-grid">{preguntas}</div>
        </section>
      </div>
    </div>
  );
}
