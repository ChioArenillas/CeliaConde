import { Pasos } from "../../../data/data"
import "./PasosSection.css"


export default function PasosSection() {
  return (
        <section className="proceso reveal-item">
          <h2>¿Cómo empezar?</h2>
          <div className="proceso-steps">
            { Pasos.map((paso) => {
                return (
                  <div 
                  className="step"
                  key={paso.id}>
                    <div className="step-number">{paso.number}</div>
                    <h3>{paso.title}</h3>
                    <p>{paso.description}</p>
                  </div>
                )
              })
            }
            </div>
        </section>
  )
}
