import "./About.css";
import heroImg from "/assets/CeliaCondeSmall.jpg";
import { InfoContacto } from "../../data/data";
import Hero from "../../components/sections/Hero/Hero";
import FormacionSection from "../../components/sections/FormacionSection/FormacionSection";
import ValuesSection from "../../components/sections/ValuesSection/ValuesSection";

export default function About() {
  return (
    <div className="about">
      <Hero
        variant="about"
        title={InfoContacto.name}
        subtitle={InfoContacto.job}
        image={heroImg}
      />

      <section className="about-content">
        <section className="reveal-item">
          <div className="about-text">
            <p>
              Hola soy Celia, soy psicóloga licenciada por la Universidad
              Pontificia de Comillas. Realicé mi especialidad en psicoterapia
              con el Máster en terapia Familiar y de Pareja (Universidad
              Pontificia de Comillas) y con la formación en Especialista en
              Psicoterapia y Psicodrama (Asociación para el Estudio de la
              Psicoterapia y el Psicodrama).
            </p>
            <p>
              Posteriormente, he desarrollado mi carrera profesional enfocada al
              estudio, análisis y aplicación de la perspectiva género. Para mí
              fue un punto de inflexión hacerme Experta en Violencia de Género
              (prevención, detección y atención), así como profundizar en la
              Terapia Feminista y Transformación Social y la Formación en
              Igualdad de Género. Durante varios años he trabajado como
              psicóloga en la Red de Espacios de Igualdad del Ayuntamiento de
              Madrid (Espacio de Igualdad Hermanas Mirabal).
            </p>
          </div>
        </section>

        <FormacionSection />

        <section className="reveal-item">
          <div className="about-text">
            <p>
              Mi profesión me apasiona y actualmente trabajo en consulta
              privada, atendiendo en terapia individual, de pareja y familia.
              Desde el inicio de mi actividad profesional soy psicóloga
              colegiada Nº {InfoContacto.colegiada} y acreditada como Psicóloga
              Sanitaria por la Consejería de Sanidad de la Comunidad de Madrid.
            </p>
            <p>
              Me encanta la formación y desde el Espacio de Igualdad participé
              como docente en la formación de Promotoras/es de Igualdad en la
              asignatura “Salud y género”. Además, he sido invitada a dos
              promociones del Máster Universitario en Evaluación e Intervención
              de Adolescentes en Conflicto del Centro Universitario Cardenal
              Cisneros, para impartir la sesión clínica “Prevención de la
              Violencia de Género en Adolescentes”.
            </p>
          </div>
        </section>

        <ValuesSection />
      </section>
    </div>
  );
}
