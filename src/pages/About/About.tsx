import "./About.css";
import heroImg from "../../assets/CeliaCondeSmall.jpg";
import { Formacion, Valores } from "../../data/data";

export default function About() {
  const formacion = Formacion.map((formacion) => {
    return (
      <li>
        <strong>{formacion.title}</strong>
        <span>{formacion.description}</span>
      </li>
    );
  });

    const values = Valores.map((value) => {
          const Icon = value.icon;

    return (
              <div className="value-card">
                        <Icon size={24} />

              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
    );
  });






  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Celia Conde</h1>
          <h2>Psicóloga Familiar</h2>
        </div>
        <div className="about-hero-image-wrapper">
          <img src={heroImg} alt="Celia Conde - Psicóloga Familiar" />
        </div>
      </section>

      <section className="about-content">
        <div className="about-text">
          <p>
            Hola, soy Celia Conde, psicóloga especializada en terapia familiar y
            de pareja. Mi objetivo es acompañarte en tu proceso de crecimiento
            personal y ayudarte a encontrar el equilibrio emocional que
            necesitas.
          </p>

          <p>
            Con años de experiencia en el ámbito clínico, he tenido la
            oportunidad de trabajar con numerosas familias y parejas,
            ayudándoles a superar conflictos, mejorar su comunicación y
            fortalecer sus vínculos afectivos.
          </p>

          <p>
            Mi enfoque terapéutico se basa en la empatía, el respeto y la
            confidencialidad. Creo firmemente que cada persona tiene los
            recursos necesarios para superar sus dificultades, y mi trabajo es
            guiarte para que los descubras y los pongas en práctica.
          </p>
        </div>

        <div className="about-credentials">
          <h2>Formación y Credenciales</h2>
          <ul className="credentials-list">{formacion}</ul>
        </div>

        <div className="about-values">
          <h2>Mis Valores</h2>
          <div className="values-grid">
            {values}
          </div>
        </div>
      </section>
    </div>
  );
}
