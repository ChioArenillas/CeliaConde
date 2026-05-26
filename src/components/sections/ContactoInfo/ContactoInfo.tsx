import { FaWhatsapp } from "react-icons/fa"
import { InfoContacto } from "../../../data/data"
import Button from "../../ui/Buttons/Buttons"
import "./ContactoInfo.css"


export default function ContactoInfo() {
  return (
          <div className="contacto-info">
            <h2>Información de Contacto</h2>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h3>Teléfono</h3>
                <p>
                  <a href={InfoContacto.phoneLink}>{InfoContacto.phone}</a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>
                  <a href={InfoContacto.emailLink}>{InfoContacto.email}</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕐</div>
              <div>
                <h3>Horario</h3>
                <p>
                  Lunes a Viernes: 9:00 - 20:00
                  <br />
                  Sábados: Con cita previa
                </p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Dirección</h3>
                <p>
                  {" "}
                  <a
                    href={InfoContacto.addressLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {InfoContacto.address}
                  </a>
                </p>
              </div>
            </div>
            <div className="map-wrapper">
              <iframe
                className="map"
                src={InfoContacto.mapLink}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="whatsapp-fixed">
              <Button
                buttonClass="whatsapp-btn"
                buttonLink={InfoContacto.whatsappLink}
                buttonText={
                  <>
                    <span className="whatsapp-icon">
                      <FaWhatsapp size={28} />
                    </span>{" "}
                    Contactar por WhatsApp
                  </>
                }
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
  )
}
