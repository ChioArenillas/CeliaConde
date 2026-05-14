import './Home.css'

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Un espacio seguro para entenderte y avanzar.</h1>
        <div className="hero-image">
          <img src="/images/celia-conde.jpg" alt="Celia Conde - Psicóloga Familiar" />
        </div>
        <a href="#contacto" className="cta-button">Reserva una primera sesión</a>
      </section>

      {/* Especialidades */}
      <section className="especialidades">
        <h2>Especialidades</h2>
        <div className="especialidades-grid">
          <div className="especialidad-card">
            <h3>Ansiedad</h3>
            <p>Aprende a gestionar la ansiedad y recuperar tu tranquilidad.</p>
          </div>
          <div className="especialidad-card">
            <h3>Autoestima</h3>
            <p>Trabaja en tu autoconcepto y fortalece tu confianza personal.</p>
          </div>
          <div className="especialidad-card">
            <h3>Terapia de Pareja</h3>
            <p>Mejora la comunicación y resuelve conflictos en tu relación.</p>
          </div>
          <div className="especialidad-card">
            <h3>Estrés</h3>
            <p>Encuentra herramientas para manejar el estrés diario.</p>
          </div>
          <div className="especialidad-card">
            <h3>Depresión</h3>
            <p>Acompañamiento profesional para superar momentos difíciles.</p>
          </div>
          <div className="especialidad-card">
            <h3>Problemas Familiares</h3>
            <p>Resolución de conflictos y mejora de relaciones familiares.</p>
          </div>
        </div>
      </section>

      {/* Cómo trabaja */}
      <section className="como-trabaja">
        <h2>Cómo trabajo</h2>
        <div className="como-trabaja-content">
          <p>Mi enfoque se basa en crear un vínculo terapéutico sólido, donde te sientas escuchado/a y comprendido/a. Utilizo técnicas basadas en evidencia científica, adaptadas a tus necesidades específicas.</p>
          <p>Cada persona es única, por lo que diseño un plan de tratamiento personalizado que respete tu ritmo y objetivos.</p>
        </div>
      </section>

      {/* Testimonios */}
      <section className="testimonios">
        <h2>Lo que dicen mis pacientes</h2>
        <div className="testimonios-grid">
          <div className="testimonio-card">
            <p>"Gracias a Celia he logrado entender mejor mis emociones y manejar mi ansiedad. Me siento mucho mejor."</p>
            <span>- María G.</span>
          </div>
          <div className="testimonio-card">
            <p>"La terapia de pareja nos ha ayudado a comunicarnos mejor y resolver conflictos que llevábamos años arrastrando."</p>
            <span>- Carlos y Ana</span>
          </div>
          <div className="testimonio-card">
            <p>"Un espacio seguro donde me siento completamente escuchada. Celia tiene una empatía increíble."</p>
            <span>- Laura M.</span>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-final" id="contacto">
        <h2>¿Listo/a para dar el primer paso?</h2>
        <p>Agenda tu primera sesión y comienza tu camino hacia el bienestar emocional.</p>
        <a href="https://wa.me/34600000000" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
          Contactar por WhatsApp
        </a>
      </section>
    </div>
  )
}