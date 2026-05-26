import { Link } from "react-router";
import "../NotFound/NotFound.css";

export default function NotFound() {
  return (
    <div className="notFound-container">
      <h1>Lo sentimos, la página que buscas no se ha encontrado.</h1>
      <Link className="cta-button hero-cta-button" to="/">
        Volver al inicio
      </Link>
    </div>
  );
}
