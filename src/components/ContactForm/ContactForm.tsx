import "../ContactForm/ContactForm.css";
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

/* Los datos del formulario nombre, email, telefono, asunto, mensaje si se cambian hay que
cambiar la configuración de EmailJS */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const phoneRegex = /^[+]?[\d\s()-]{9,}$/;

  if (!phoneRegex.test(formData.telefono.trim())) {
    alert("Introduce un teléfono válido");
    return;
  }

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceID || !templateID || !publicKey) {
    alert("Faltan variables de configuración de EmailJS");
    return;
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
        mensaje: formData.mensaje,
      },
      publicKey
    );

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",
    });
  } catch (error) {
    console.error(error);
    alert("Error al enviar el mensaje");
  }
};  

return (
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
            pattern="^[+]?[\d\s()-]{9,}$"
            placeholder="+34 600 000 000"
            inputMode="tel"
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

        <button className="submit-btn" type="submit">
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}