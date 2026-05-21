import "./CTA.css"

type CTAProps = {
  title: string;
  description: string;
  buttonText: string;
  href: string;
};

export default function CTA({
  title,
  description,
  buttonText,
  href,
}: CTAProps) {
  return (
    <section className="cta reveal-item">
      <h2>{title}</h2>
      <p>{description}</p>

      <a href={href} className="cta-button">
        {buttonText}
      </a>
    </section>
  );
}