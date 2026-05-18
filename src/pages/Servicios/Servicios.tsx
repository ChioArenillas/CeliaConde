import './Servicios.css'

export default function Servicios() {


  return (
    <div className="servicios">
      <section className="servicios-hero">
          <div className="servicios-hero-content">
          <h1>Servicios</h1>
          <p>Acompañamiento psicológico profesional adaptado a tus necesidades</p>
        </div>
      </section>


      <section className="modalidades">
        <h2>Modalidades de Atención</h2>
        <div className="modalidades-grid">
          <div className="modalidad-card">
            <div className="modalidad-icon">🖥️</div>
            <h3>Terapia Online</h3>
            <p>Sesiones por videollamada desde la comodidad de tu hogar. Misma calidad y cercanía que la presencialidad.</p>
            <ul>
              <li>Plataforma segura y confidencial</li>
              <li>Horarios flexibles</li>
              <li>Sin desplazamientos</li>
              <li>Ideal para personas con movilidad reducida o que viven en el extranjero</li>
            </ul>
          </div>
          <div className="modalidad-card">
            <div className="modalidad-icon">🏥</div>
            <h3>Terapia Presencial</h3>
            <p>Atención en mi consulta, un espacio acogedor y seguro donde trabajar juntos por tu bienestar.</p>
            <ul>
              <li>Consulta céntrica y accesible</li>
              <li>Ambiente tranquilo y privado</li>
              <li>Atención personalizada</li>
              <li>Protocolos de higiene y seguridad</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tipos-terapia">
        <h2>Tipos de Terapia</h2>
        <div className="terapias-grid">
          <div className="terapia-card">
            <h3>Terapia Individual</h3>
            <p>Sesiones one-to-one enfocadas en tus necesidades personales. Trabajaremos juntos en aquello que te preocupa o te hace sufrir.</p>
            <div className="terapia-info">
              <span><strong>Duración:</strong> 50 minutos</span>
              <span><strong>Frecuencia:</strong> Semanal o quincenal</span>
            </div>
          </div>
          <div className="terapia-card">
            <h3>Terapia de Pareja</h3>
            <p>Espacio para mejorar la comunicación, resolver conflictos y fortalecer el vínculo afectivo entre ambos miembros.</p>
            <div className="terapia-info">
              <span><strong>Duración:</strong> 60-75 minutos</span>
              <span><strong>Frecuencia:</strong> Quincenal o mensual</span>
            </div>
          </div>
          <div className="terapia-card">
            <h3>Terapia Familiar</h3>
            <p>Intervención dirigida a mejorar las relaciones familiares, resolver conflictos y promover un ambiente saludable en el hogar.</p>
            <div className="terapia-info">
              <span><strong>Duración:</strong> 60-90 minutos</span>
              <span><strong>Frecuencia:</strong> Según necesidades</span>
            </div>
          </div>
          <div className="terapia-card">
            <h3>Orientación Psicológica</h3>
            <p>Sesiones puntuales para consultar dudas específicas o recibir orientación sobre situaciones concretas.</p>
            <div className="terapia-info">
              <span><strong>Duración:</strong> 50 minutos</span>
              <span><strong>Frecuencia:</strong> Puntual</span>
            </div>
          </div>
        </div>
      </section>

      <section className="proceso">
        <h2>¿Cómo empezar?</h2>
        <div className="proceso-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Contacta conmigo</h3>
            <p>Escríbeme por WhatsApp o mediante el formulario de contacto para solicitar información.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Primera sesión</h3>
            <p>Agendamos una primera sesión para conocernos y evaluar tus necesidades.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Plan personalizado</h3>
            <p>Diseñamos juntos un plan de intervención adaptado a tus objetivos.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Comienza tu proceso</h3>
            <p>Iniciamos las sesiones regulares y trabajamos hacia tu bienestar emocional.</p>
          </div>
        </div>
      </section>

      <section className="cta"> 
        <h2>¿Tienes dudas?</h2>
        <p>Estoy aquí para ayudarte. Contacta conmigo sin compromiso.</p>
        <a href="/contacto" className="cta-button">Contactar Ahora</a>
      </section>
    </div>
  )
}