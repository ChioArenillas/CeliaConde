import { Link } from 'react-router'
import './Footer.css'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { InfoContacto } from '../../data/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>{InfoContacto.name}</h3>
          <p>{InfoContacto.job}</p>
          <p className="footer-description">Acompañamiento psicológico profesional para ayudarte a encontrar tu bienestar emocional.</p>
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
          <p>📍 {InfoContacto.address}</p>
          <p>📧 {InfoContacto.email}</p>
          <p>📱 {InfoContacto.phone}</p>
          <div className='footer-icons'>
                    <a href={InfoContacto.whatsappLink} className="whatsapp-header" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp size={28} />
        </a>

             <a
            href={InfoContacto.instagramLink}
            className="footer-instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} {InfoContacto.name} - {InfoContacto.job}. Todos los derechos reservados.</p>
        <p className="legal-links">
          <Link to="/aviso-legal">Aviso Legal</Link>
          <Link to="/privacidad">Política de Privacidad</Link>
          <Link to="/cookies">Política de Cookies</Link>
        </p>
      </div>
    </footer>
  )
}