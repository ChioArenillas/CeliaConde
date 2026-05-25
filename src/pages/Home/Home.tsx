import { Especialidades, Reviews } from "../../data/data";
import "./Home.css";
import heroImg from "/assets/CeliaConde.jpg";
import CTA from "../../components/CTA/CTA";
import Hero from "../../components/Hero/Hero";

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
    <section className="home">
<Hero
  variant="home"
  title="Te acompaño a poner fin a relaciones familiares difíciles."
  buttonText="Reserva una primera sesión"
  buttonLink="/contacto"
  image={heroImg}
/>
      <section className="home-content">
        <section className="como-trabaja reveal-item">
          <h2>Cómo trabajo</h2>
          <div className="como-trabaja-content">
            <p>
              Mi objetivo es acompañarte en tu proceso de crecimiento personal y
              ayudarte a encontrar el equilibrio emocional que necesitas. Cada
              persona es única, por lo que diseño un plan de tratamiento
              personalizado que respete tu ritmo y objetivos.
            </p>

            <p>
              Con años de experiencia en el ámbito clínico, he tenido la
              oportunidad de trabajar con numerosas familias y parejas,
              ayudándoles a superar conflictos, mejorar su comunicación y
              fortalecer sus vínculos afectivos.
            </p>
            <p>
              Mi enfoque terapéutico se basa en la empatía, el respeto y la
              confidencialidad creando un vínculo terapéutico sólido, donde te
              sientas escuchado/a y comprendido/a. Creo firmemente que cada
              persona tiene los recursos necesarios para superar sus
              dificultades, y mi trabajo es guiarte para que los descubras y los
              pongas en práctica.
            </p>
          </div>
        </section>

        <section className="especialidades reveal-item">
          <h2>Especialidades</h2>
          <div className="especialidades-grid">{especialidades}</div>
        </section>

        <section className="testimonios reveal-item">
          <h2>Lo que dicen mis pacientes</h2>
          <div className="testimonios-grid">{reviews}</div>
        </section>

        <CTA
          title="¿Listo/a para dar el primer paso?"
          description="Agenda tu primera sesión y comienza tu camino hacia el bienestar emocional."
        />
      </section>
    </section>
  );
}
