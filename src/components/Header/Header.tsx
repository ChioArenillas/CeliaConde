import { Link, NavLink } from "react-router";
import "./Header.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { InfoContacto } from "../../data/data";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="top">
          <Link to="/" className="logo">
            <span className="logo-text">{InfoContacto.name}</span>
            <span className="logo-subtitle">{InfoContacto.job}</span>
          </Link>
          <div className="icons">
            <a
              href={InfoContacto.whatsappLink}
              className="whatsapp-round"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={28} />
            </a>
            <a
              href={InfoContacto.instagramLink}
              className="instagram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>

        <nav className="nav">
          <div>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Sobre Mí
            </NavLink>
            <NavLink
              to="/servicios"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Servicios
            </NavLink>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contacto
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
