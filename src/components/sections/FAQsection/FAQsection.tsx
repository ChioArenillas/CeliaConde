import { FAQs } from "../../../data/data";
import "./FAQsection.css";

export default function FAQsection() {
  return (
    <section className="faq-section reveal-item">
      <h2>Preguntas Frecuentes</h2>
      <div className="faq-grid">
        {FAQs.map((FAQ) => {
          return (
            <div className="faq-item" key={FAQ.id}>
              <h3>{FAQ.title}</h3>
              <p> {FAQ.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
