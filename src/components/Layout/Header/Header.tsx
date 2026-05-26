import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { InfoContacto } from "../../../data/data";
import Button from "../../ui/Buttons/Buttons";

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
            <Button
                buttonLink={InfoContacto.whatsappLink}
                buttonClass= "whatsapp-round wa-header"
                target="_blank"
                rel="noopener noreferrer"
                buttonText={<FaWhatsapp size={32} />}
            />            
            <Button
                buttonLink={InfoContacto.instagramLink}
                buttonClass= "instagram ig-header"
                target="_blank"
                rel="noopener noreferrer"
                buttonText={<FaInstagram size={32} />}
            />
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
