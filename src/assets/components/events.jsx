import { CardsEvents } from "./cardsEvents";
import "../CSS/events.css";

export function EventsPage() {
  return (
    <>
      <article className="content__allEventsPage-eventosSC">
        <section className="introductionSection">
          <h2 className="titleEvents txtGradients">Eventos Destacados</h2>
          <p className="txt">Lo mejor que Sabana Centro tiene para ofrecer</p>
        </section>

        <figure className="content_eventsDestacados">
          <CardsEvents />
          <CardsEvents />
          <CardsEvents />
        </figure>
      </article>
    </>
  );
}
