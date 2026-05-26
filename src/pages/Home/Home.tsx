import "./Home.css";
import heroImg from "/assets/CeliaConde.jpg";
import CTA from "../../components/sections/CTA/CTA";
import Hero from "../../components/sections/Hero/Hero";
import EspecialidadesSection from "../../components/sections/EspecialidadesSection/EspecialidadesSection";
import ReviewsSection from "../../components/sections/ReviewsSection/ReviewsSection";

export default function Home() {
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

        <EspecialidadesSection />

        <ReviewsSection />

        <CTA
          title="¿Listo/a para dar el primer paso?"
          description="Agenda tu primera sesión y comienza tu camino hacia el bienestar emocional."
        />
      </section>
    </section>
  );
}
