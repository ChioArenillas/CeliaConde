import { Pasos, Terapias } from '../../data/data'
import './Servicios.css'

export default function Servicios() {
  const terapias = Terapias.map((terapia) => {
    return (
          <div className="terapia-card">
            <h3>{terapia.title}</h3>
            <p>{terapia.description}</p>
            <div className="terapia-info">
              <span><strong>Duración: </strong>{terapia.duration}</span>
              <span><strong>Frecuencia: </strong>{terapia.frequency}</span>
            </div>
          </div>
    )
  })

  const pasos = Pasos.map((paso) => {
    return (
          <div className="step">
            <div className="step-number">{paso.number}</div>
            <h3>{paso.title}</h3>
            <p>{paso.description}</p>
          </div>    )
  })


  return (
    <div className="servicios">
      <section className="hero servicios-hero">
          <div className="hero-content">
          <h1>Servicios</h1>
          <p>Acompañamiento psicológico profesional adaptado a tus necesidades.</p>
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
          {terapias}
        </div>
      </section>

      <section className="proceso">
        <h2>¿Cómo empezar?</h2>
        <div className="proceso-steps">
        {pasos}
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