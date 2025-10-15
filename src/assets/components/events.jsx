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
          <CardsEvents />
        </figure>

        <section className="introductionSection">
          <h2 className="titleEvents txtGradients">Próximos Eventos</h2>
          <p className="txt">No te pierdas estas experiencias cercanas</p>
        </section>

        <figure className="content_eventsProximos"></figure>
      </article>
    </>
  );
}
