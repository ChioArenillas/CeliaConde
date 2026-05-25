import "./CTA.css";
import { Link } from "react-router";

type CTAProps = {
  title: string;
  description: string;
};

export default function CTA({ title, description }: CTAProps) {
  return (
    <section className="cta reveal-item">
      <h2>{title}</h2>
      <p>{description}</p>

      <Link
        className="cta-button"
        to="/contacto"
      >Contactar Ahora</Link>
    </section>
  );
}
