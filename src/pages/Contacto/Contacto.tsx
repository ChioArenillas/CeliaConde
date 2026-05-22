import { useState, type FormEvent } from "react";
import "./Contacto.css";
import { FAQs, InfoContacto } from "../../data/data";
import { FaWhatsapp } from "react-icons/fa";
import Hero from "../../components/Hero/Hero";
import emailjs from "@emailjs/browser";

/* Los datos del formulario nombre, email, telefono, asunto, mensaje si se cambian hay que cambiar la configuración
de EmailJS */
export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });
  const isValidEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

const isValidPhone = (phone: string) => {
  const regex = /^[+]?[\d\s()-]{9,}$/
  return regex.test(phone.trim())
}

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  if (!isValidEmail(formData.email)) {
    alert("Introduce un email válido")
    return
  }

  if (!isValidPhone(formData.telefono)) {
    alert("Introduce un teléfono válido")
    return
  }

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceID || !templateID || !publicKey) {
    alert("Faltan variables de configuración de EmailJS")
    return
  }

  try {
    await emailjs.send(
      serviceID,
      templateID,
      {
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        asunto: formData.asunto,
        mensaje: formData.mensaje
      },
      publicKey
    )

    alert('Mensaje enviado correctamente')

    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    })

  } catch (error) {
    console.error(error)
    alert('Error al enviar el mensaje')
  }
}

  const preguntas = FAQs.map((FAQ) => {
    return (
      <div className="faq-item">
        <h3>{FAQ.title}</h3>
        <p> {FAQ.description}</p>
      </div>
    );
  });

  return (
    <div className="contacto">
      <Hero
        variant="contacto"
        title="Contacto"
        description="Estoy aquí para ayudarte. Da el primer paso hacia tu bienestar emocional."
      />
      <div className="contacto-content">
        <section className="contacto-content-top reveal-item">
          <div className="contacto-info">
            <h2>Información de Contacto</h2>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Dirección</h3>
                <p>{InfoContacto.address}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>{InfoContacto.email}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h3>Teléfono / WhatsApp</h3>
                <p>{InfoContacto.phone}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕐</div>
              <div>
                <h3>Horario</h3>
                <p>
                  Lunes a Viernes: 9:00 - 20:00
                  <br />
                  Sábados: Con cita previa
                </p>
              </div>
            </div>

            <div className="whatsapp-fixed">
              <a
                href={InfoContacto.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <span className="whatsapp-icon">
                  <FaWhatsapp size={28} />
                </span>
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          <div className="contacto-formulario reveal-item">
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
                <label htmlFor="telefono">Teléfono *</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
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
                  <option value="primera-sesion">
                    Solicitar primera sesión
                  </option>
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
        <section className="contacto-map reveal-item">
          <h2>Cómo llegar</h2>

          <div className="map-wrapper">
            <iframe
              src={InfoContacto.mapLink}
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
        <section className="faq-section reveal-item">
          <h2>Preguntas Frecuentes</h2>
          <div className="faq-grid">{preguntas}</div>
        </section>
      </div>
    </div>
  );
}
