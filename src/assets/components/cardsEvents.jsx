import { CalendarIcon, MapPinIcon, StarIcon, TagIcon } from "lucide-react";
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

      <article className="contentCardEventNext-eventosSC">
        <div className="bx-imageEventoNext">
          <span className="tooltipTypeEvent">Cultura</span>
          <img
            src="/images/660af6d9b027c628039048.jpg"
            alt=""
            className="imageEventNext"
          />
        </div>

        <section className="bx-infoEventNext">
          <header className="content-introductionEvent">
            <h3 className="titleEventNext txtGradients">
              Exposición de Arte Contemporáneo
            </h3>
            <p className="txt">
              Galería con obras de artistas colombianos emergentes y
              establecidos.
            </p>
          </header>

          <div className="bx-data-event">
            <section className="dataEvent">
              <span className="locationEvent styleGeneralDataEvent">
                <span className="iconLocation">
                  <MapPinIcon />
                </span>{" "}
                Zipaquirá
              </span>

              <span className="dateEvent styleGeneralDataEvent">
                {" "}
                <span className="iconCalendar">
                  <CalendarIcon />
                </span>{" "}
                20 Oct - 30 Nov 2025
              </span>
            </section>

            <section className="bxTagsEvent">
              <span className="tagEvent">
                {" "}
                <span className="iconTag">
                  <TagIcon color="var(--dark)" />
                </span>{" "}
                Arte
              </span>
              <span className="tagEvent">
                <span className="iconTag">
                  <TagIcon color="var(--dark)" />
                </span>{" "}
                Exposición
              </span>
              <span className="tagEvent">
                <span className="iconTag">
                  <TagIcon color="var(--dark)" />
                </span>{" "}
                Cultura
              </span>
            </section>
          </div>
        </section>
      </article>
    </>
  );
}
