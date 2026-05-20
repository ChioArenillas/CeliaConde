import { Especialidades, Reviews } from "../../data/data";
import "./Home.css";
import heroImg from "../../assets/CeliaConde.jpg";

export default function Home() {
  const especialidades = Especialidades.map((especialidad) => {
    const Icon = especialidad.icon;

    return (
      <div className="especialidad-card">
        <Icon size={24} />
        <h3>{especialidad.title}</h3>
        <p>{especialidad.description}</p>
      </div>
    );
  });
  const reviews = Reviews.map((review) => {
    return (
      <div className="testimonio-card">
        <p>{review.text}</p>
        <span>- {review.name}</span>
      </div>
    );
  });

  return (
    <div className="home">
      <section className="home-hero hero">
        <div className="hero-content">
          <h1>Un espacio seguro para entenderte y avanzar.</h1>
          <a href="contacto" className="cta-button hero-cta-button">
            Reserva una primera sesión
          </a>
        </div>
                <div className="hero-image-wrapper">
          <img src={heroImg} alt="Psicóloga"/>
        </div>

      </section>

      <section className="especialidades">
        <h2>Especialidades</h2>
        <div className="especialidades-grid">{especialidades}</div>
      </section>

      <section className="como-trabaja">
        <h2>Cómo trabajo</h2>
        <div className="como-trabaja-content">
          <p>
            Mi enfoque se basa en crear un vínculo terapéutico sólido, donde te
            sientas escuchado/a y comprendido/a. Utilizo técnicas basadas en
            evidencia científica, adaptadas a tus necesidades específicas.
          </p>
          <p>
            Cada persona es única, por lo que diseño un plan de tratamiento
            personalizado que respete tu ritmo y objetivos.
          </p>
        </div>
      </section>

      <section className="testimonios">
        <h2>Lo que dicen mis pacientes</h2>
        <div className="testimonios-grid">{reviews}</div>
      </section>

      <section className="cta"> 
        <h2>¿Listo/a para dar el primer paso?</h2>
        <p>Agenda tu primera sesión y comienza tu camino hacia el bienestar emocional.</p>
        <a href="/contacto" className="cta-button">Contactar Ahora</a>
      </section>

    </div>
  );
}
