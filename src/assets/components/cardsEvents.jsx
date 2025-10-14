import { MapPinIcon, StarIcon } from "lucide-react";
import "../CSS/cardsEvents.css";

export function CardsEvents() {
  return (
    <>
      <article className="contentCardEvent-eventosSC">
        <section className="bx-tooltipEvent">
          <span className="txtOutstanding">
            <span className="iconOutstanding">
              <StarIcon />
            </span>{" "}
            Destacado
          </span>

          <span className="txtCategory">Gastronomía</span>
        </section>

        <section className="bx-infoEvent">
          <h3 className="titleEventCard">Restaurante Andrés Carne de Res</h3>
          <p className="txt">
            Experiencia gastronómica y cultural única con comida típica
            colombiana.
          </p>

          <div className="bx-check">
            <div className="check">
              <MapPinIcon />
            </div>
            <span className="txtLocation">Chía</span>
          </div>
        </section>
      </article>
    </>
  );
}
