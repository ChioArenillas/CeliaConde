import './About.css'

export default function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>Sobre Mí</h1>
        <div className="about-image">
          <img src="/images/celia-conde.jpg" alt="Celia Conde - Psicóloga Familiar" />
        </div>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Celia Conde</h2>
          <p className="subtitle">Psicóloga Familiar</p>

          <p>Hola, soy Celia Conde, psicóloga especializada en terapia familiar y de pareja. Mi objetivo es acompañarte en tu proceso de crecimiento personal y ayudarte a encontrar el equilibrio emocional que necesitas.</p>

          <p>Con años de experiencia en el ámbito clínico, he tenido la oportunidad de trabajar con numerosas familias y parejas, ayudándoles a superar conflictos, mejorar su comunicación y fortalecer sus vínculos afectivos.</p>

          <p>Mi enfoque terapéutico se basa en la empatía, el respeto y la confidencialidad. Creo firmemente que cada persona tiene los recursos necesarios para superar sus dificultades, y mi trabajo es guiarte para que los descubras y los pongas en práctica.</p>
        </div>

        <div className="about-credentials">
          <h2>Formación y Credenciales</h2>
          <ul className="credentials-list">
            <li>
              <strong>Grado en Psicología</strong>
              <span>Universidad Complutense de Madrid</span>
            </li>
            <li>
              <strong>Máster en Terapia Familiar y de Pareja</strong>
              <span>Instituto de Terapia Familiar</span>
            </li>
            <li>
              <strong>Especialista en Ansiedad y Estrés</strong>
              <span>Centro de Estudios de Psicología Clínica</span>
            </li>
            <li>
              <strong>Nº de Colegiada: M-XXXXX</strong>
              <span>Colegio Oficial de Psicólogos de Madrid</span>
            </li>
          </ul>
        </div>

        <div className="about-values">
          <h2>Mis Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Empatía</h3>
              <p>Te escucho sin juzgar, creando un espacio donde te sientas comprendido/a.</p>
            </div>
            <div className="value-card">
              <h3>Confidencialidad</h3>
              <p>Tu privacidad es mi prioridad absoluta en todo momento.</p>
            </div>
            <div className="value-card">
              <h3>Profesionalidad</h3>
              <p>Me actualizo constantemente para ofrecerte las mejores herramientas terapéuticas.</p>
            </div>
            <div className="value-card">
              <h3>Compromiso</h3>
              <p>Estoy contigo en cada paso de tu proceso de cambio.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}