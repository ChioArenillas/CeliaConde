import { Link } from "react-router";
import "./Footer.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { InfoContacto } from "../../data/data";
import Button from "../Buttons/Buttons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>{InfoContacto.name}</h3>
          <p>{InfoContacto.job}</p>
          <p className="footer-description">
            Acompañamiento psicológico profesional para ayudarte a encontrar tu
            bienestar emocional.
          </p>
        </div>

        <div className="footer-links">
          <h4>Enlaces</h4>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/about">Sobre Mí</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <div className="footer-icons">
            <Button
              buttonLink={InfoContacto.whatsappLink}
              buttonClass="whatsapp-round wa-footer"
              target="_blank"
              rel="noopener noreferrer"
              buttonText={<FaWhatsapp size={32} />}
            />
            <Button
              buttonLink={InfoContacto.instagramLink}
              buttonClass="instagram ig-footer"
              target="_blank"
              rel="noopener noreferrer"
              buttonText={<FaInstagram size={32} />}
            />
          </div>
          <p>
            📱 <a href={InfoContacto.phoneLink}>{InfoContacto.phone}</a>
          </p>
          <p>
            📧 <a href={InfoContacto.emailLink}>{InfoContacto.email}</a>
          </p>
        </div>
        <div className="footer-contact">
          <h4>Dirección</h4>
          <p>
            📍{" "}
            <a
              href={InfoContacto.addressLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {InfoContacto.address}
            </a>
          </p>

          <div className="map-wrapper">
            <iframe
              className="map"
              src={InfoContacto.mapLink}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} {InfoContacto.name} - {InfoContacto.job}. Todos
          los derechos reservados.
        </p>
        <p>
          Web diseñada y desarrollada por Rocio Arenillas ·{" "}
          <a
            className="portfolio"
            href="https://portfolio-rocio-arenillas.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver portfolio
          </a>
        </p>
        <p className="legal-links">
          <Link to="/legal">Aviso Legal</Link>
          <Link to="/privacidad">Política de Privacidad</Link>
          <Link to="/cookies">Política de Cookies</Link>
        </p>
      </div>
    </footer>
  );
}
