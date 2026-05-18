import { useState, type FormEvent } from 'react'
import './Contacto.css'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    alert('Gracias por tu mensaje. Me pondré en contacto contigo pronto.')
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    })
  }

  return (
    <div className="contacto">

      <section className="contacto-hero">
          <div className="contacto-hero-content">
          <h1>Contacto</h1>
        <p>Estoy aquí para ayudarte. Da el primer paso hacia tu bienestar emocional.</p>
        </div>
      </section>
      
      <section className="contacto-content">
        <div className="contacto-info">
          <h2>Información de Contacto</h2>

          <div className="info-item">
            <div className="info-icon">📍</div>
            <div>
              <h3>Dirección</h3>
              <p>Calle Ejemplo, 123, 1ºA<br/>28001 Madrid</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📧</div>
            <div>
              <h3>Email</h3>
              <p>info@celiaconde.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📱</div>
            <div>
              <h3>Teléfono / WhatsApp</h3>
              <p>+34 600 000 000</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">🕐</div>
            <div>
              <h3>Horario</h3>
              <p>Lunes a Viernes: 9:00 - 20:00<br/>Sábados: Con cita previa</p>
            </div>
          </div>

          <div className="whatsapp-fixed">
            <a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <span className="whatsapp-icon">💬</span>
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        <div className="contacto-formulario">
          <h2>Envíame un mensaje</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+34 600 000 000"
              />
            </div>

            <div className="form-group">
              <label htmlFor="asunto">Asunto *</label>
              <select
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un asunto</option>
                <option value="primera-sesion">Solicitar primera sesión</option>
                <option value="informacion">Pedir información</option>
                <option value="terapia-online">Terapia online</option>
                <option value="terapia-presencial">Terapia presencial</option>
                <option value="terapia-pareja">Terapia de pareja</option>
                <option value="terapia-familiar">Terapia familiar</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Cuéntame brevemente en qué puedo ayudarte..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      <section className="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>¿Cuánto dura cada sesión?</h3>
            <p>Las sesiones individuales duran aproximadamente 50 minutos. Las sesiones de pareja o familiares pueden extenderse hasta 75-90 minutos según sea necesario.</p>
          </div>
          <div className="faq-item">
            <h3>¿Ofreces terapia online y presencial?</h3>
            <p>Sí, ofrezco ambas modalidades. La terapia online se realiza por videollamada a través de una plataforma segura y confidencial.</p>
          </div>
          <div className="faq-item">
            <h3>¿Cuál es el precio de las sesiones?</h3>
            <p>El precio de la sesión individual es de XX€. Para terapias de pareja o familiares, el precio es de XX€. La primera sesión tiene un coste de XX€.</p>
          </div>
          <div className="faq-item">
            <h3>¿Tengo que pedir cita con mucha antelación?</h3>
            <p>Recomiendo solicitar cita con al menos una semana de antelación, aunque dependiendo de la disponibilidad podría haber huecos más cercanos.</p>
          </div>
          <div className="faq-item">
            <h3>¿Qué métodos de pago aceptas?</h3>
            <p>Acepto pago en efectivo, transferencia bancaria y tarjetas de crédito/débito. El pago se realiza al finalizar cada sesión.</p>
          </div>
          <div className="faq-item">
            <h3>¿Es confidencial la terapia?</h3>
            <p>Absolutamente. Todo lo hablado en las sesiones es completamente confidencial, salvo en situaciones excepcionales donde haya riesgo para la persona o terceros.</p>
          </div>
        </div>
      </section>
    </div>
  )
}