import { CalendarIcon, MapPinIcon, StarIcon, TagIcon } from "lucide-react";
import "../CSS/cardsEvents.css";

export function CardsEvents({
  categoryMain,
  titleEvent,
  descriptionEvent,
  locationEvent,
  dateEvent,
  tagsEvent,
  imageEvent,
  destacado,
  proximo,
}) {
  return (
    <>
      {destacado && (
        <article
          className="contentCardEvent-eventosSC"
          style={{
            backgroundImage: `url(${imageEvent})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <section className="bx-tooltipEvent">
            <span className="txtOutstanding">
              <span className="iconOutstanding">
                <StarIcon color="var(--dark)" />
              </span>{" "}
              Destacado
            </span>

            <span className="txtCategory">{categoryMain}</span>
          </section>

          <section className="bx-infoEvent">
            <h3 className="titleEventCard">{titleEvent}</h3>
            <p className="txt">{descriptionEvent}</p>

            <div className="bx-check">
              <div className="check">
                <MapPinIcon />
              </div>
              <span className="txtLocation">{locationEvent}</span>
            </div>
          </section>
        </article>
      )}

      {proximo && (
        <article className="contentCardEventNext-eventosSC">
          <div className="bx-imageEventoNext">
            <span className="tooltipTypeEvent">{categoryMain}</span>
            <img src={imageEvent} alt="" className="imageEventNext" />
          </div>

          <section className="bx-infoEventNext">
            <header className="content-introductionEvent">
              <h3 className="titleEventNext txtGradients">{titleEvent}</h3>
              <p className="txt">{descriptionEvent}</p>
            </header>

            <div className="bx-data-event">
              <section className="dataEvent">
                <span className="locationEvent styleGeneralDataEvent">
                  <span className="iconLocation">
                    <MapPinIcon />
                  </span>{" "}
                  {locationEvent}
                </span>

                <span className="dateEvent styleGeneralDataEvent">
                  {" "}
                  <span className="iconCalendar">
                    <CalendarIcon />
                  </span>{" "}
                  {dateEvent}
                </span>
              </section>

              <section className="bxTagsEvent">
                <span className="tagEvent">
                  {" "}
                  <span className="iconTag">
                    <TagIcon color="var(--dark)" />
                  </span>{" "}
                  {tagsEvent[0]}
                </span>
                <span className="tagEvent">
                  <span className="iconTag">
                    <TagIcon color="var(--dark)" />
                  </span>{" "}
                  {tagsEvent[1]}
                </span>
                <span className="tagEvent">
                  <span className="iconTag">
                    <TagIcon color="var(--dark)" />
                  </span>{" "}
                  {tagsEvent[2]}
                </span>
              </section>
            </div>
          </section>
        </article>
      )}
    </>
  );
}
