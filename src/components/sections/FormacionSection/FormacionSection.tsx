import "./FormacionSection.css"
import { Formacion } from '../../../data/data';


export default function FormacionSection() {
  return (
        <section className="about-education reveal-item">
          <h2>Formación</h2>
          <ul className="education-list">
            {Formacion.map((formacion) => {
                return (
                  <li key={formacion.id}>
                    <strong>{formacion.title}</strong>
                    <span>{formacion.description}</span>
                    <span>{formacion.year}</span>
                  </li>
                )
              })
            }
            </ul>
        </section>
  )
}
