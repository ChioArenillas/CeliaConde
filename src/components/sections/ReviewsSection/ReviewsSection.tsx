import { Reviews } from "../../../data/data";
import "./ReviewsSection.css";

export default function ReviewsSection() {
  return (
    <section className="testimonios reveal-item">
      <h2>Lo que dicen mis pacientes</h2>
      <div className="testimonios-grid">
        {Reviews.map((review) => {
          return (
            <div className="testimonio-card" key={review.id}>
              <p>{review.text}</p>
              <span>- {review.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
