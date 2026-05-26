import "./ModalidadesSection.css"


export default function ModalidadesSection() {
  return (
        <section className="modalidades reveal-item">
          <h2>Modalidades de Atención</h2>
          <div className="modalidades-grid">
            <div className="modalidad-card">
              <div className="modalidad-icon">🖥️</div>
              <h3>Terapia Online</h3>
              <p>
                Sesiones por videollamada desde la comodidad de tu hogar. Misma
                calidad y cercanía que la presencialidad.
              </p>
              <ul>
                <li>Plataforma segura y confidencial</li>
                <li>Horarios flexibles</li>
                <li>Sin desplazamientos</li>
                <li>
                  Ideal para personas con movilidad reducida o que viven en el
                  extranjero
                </li>
              </ul>
            </div>
            <div className="modalidad-card">
              <div className="modalidad-icon">🏥</div>
              <h3>Terapia Presencial</h3>
              <p>
                Atención en mi consulta, un espacio acogedor y seguro donde
                trabajar juntos por tu bienestar.
              </p>
              <ul>
                <li>Consulta céntrica y accesible</li>
                <li>Ambiente tranquilo y privado</li>
                <li>Atención personalizada</li>
                <li>Protocolos de higiene y seguridad</li>
              </ul>
            </div>
          </div>
        </section>
  )
}
