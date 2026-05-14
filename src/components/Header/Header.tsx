import { Link, NavLink } from 'react-router'
import './Header.css'
import { FaWhatsapp } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">Celia Conde</span>
          <span className="logo-subtitle">Psicóloga Familiar</span>
        </Link>

        <nav className="nav">
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Sobre Mí
          </NavLink>
          <NavLink to="/servicios" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Servicios
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Contacto
          </NavLink>
        <a href="https://wa.me/34600000000" className="whatsapp-header" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp size={28} />
        </a>

        </nav>
      </div>
    </header>
  )
}