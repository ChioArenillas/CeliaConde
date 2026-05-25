import "./CTA.css";
import { NavLink } from "react-router-dom";

type CTAProps = {
  title: string;
  description: string;
};

export default function CTA({ title, description }: CTAProps) {
  return (
    <section className="cta reveal-item">
      <h2>{title}</h2>
      <p>{description}</p>

      <NavLink className="cta-button" to="/contacto">
        Contactar Ahora
      </NavLink>
    </section>
  );
}
