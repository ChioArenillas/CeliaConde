import { Terapias } from "../../../data/data";
import "./TerapiasSection.css";

export default function TerapiasSection() {
  return (
    <section className="tipos-terapia reveal-item">
      <h2>Tipos de Terapia</h2>
      <div className="terapias-grid">
        {Terapias.map((terapia) => {
          return (
            <div className="terapia-card" key={terapia.id}>
              <h3>{terapia.title}</h3>
              <p>{terapia.description}</p>
              <div className="terapia-info">
                <span>
                  <strong>Duración: </strong>
                  {terapia.duration}
                </span>
                <span>
                  <strong>Frecuencia: </strong>
                  {terapia.frequency}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
