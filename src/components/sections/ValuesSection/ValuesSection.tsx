import { Valores } from "../../../data/data";
import "./ValuesSection.css";

export default function ValuesSection() {
  return (
    <section className="about-values reveal-item">
      <h2>Mis Valores</h2>
      <div className="values-grid">
        {Valores.map((value) => {
          const Icon = value.icon;

          return (
            <div className="value-card" key={value.id}>
              <Icon size={24} />

              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
}
