import "./CTA.css";
import Button from "../Buttons/Buttons";

type CTAProps = {
  title: string;
  description: string;
};

export default function CTA({ title, description }: CTAProps) {
  return (
    <section className="cta reveal-item">
      <h2>{title}</h2>
      <p>{description}</p>

      <Button
        buttonClass="cta-button"
        buttonText="Contactar Ahora"
        buttonLink="/contacto"
      />
    </section>
  );
}
