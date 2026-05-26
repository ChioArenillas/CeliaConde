import "./EspecialidadesSection.css";
import { Especialidades } from "../../../data/data";

export default function EspecialidadesSection() {
  return (
    <section className="especialidades reveal-item">
      <h2>Especialidades</h2>
      <div className="especialidades-grid">
        {Especialidades.map((especialidad) => {
          const Icon = especialidad.icon;

          return (
            <div className="especialidad-card" key={especialidad.id}>
              <Icon size={24} />
              <h3>{especialidad.title}</h3>
              <p>{especialidad.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
