import "../Hero/Hero.css";
import { NavLink } from "react-router-dom";

type HeroProps = {
  variant?: "home" | "about" | "servicios" | "contacto";
  title: string;
  subtitle?: string;
  description?: string;
  buttonClass?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: string;
};

export default function Hero({
  variant = "home",
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  image,
}: HeroProps) {
  return (
    <section className={`hero ${variant}-hero reveal-item`}>
      <div className="hero-content">
        <h1>{title}</h1>

        {subtitle && <h2>{subtitle}</h2>}
        {description && <p>{description}</p>}

        {buttonText && buttonLink && (
          <NavLink className="cta-button hero-cta-button" 
            to={buttonLink}>
            {buttonText}
          </NavLink>
        )}
      </div>

      {image && variant !== "servicios" && variant !== "contacto" && (
        <div className="hero-image-wrapper">
          <img src={image} alt={title} />
        </div>
      )}
    </section>
  );
}
