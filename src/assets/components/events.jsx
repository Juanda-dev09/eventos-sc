import { CardsEvents } from "./cardsEvents";
import "../CSS/events.css";
import data from "../JSON/data.json";

export function EventsPage() {
  const destacados = data.eventos.filter((event) => event.destacado);
  const proximos = data.eventos.filter((event) => !event.destacado);

  return (
    <>
      <article className="content__allEventsPage-eventosSC">
        <section className="introductionSection">
          <h2 className="titleEvents txtGradients">Eventos Destacados</h2>
          <p className="txt">Lo mejor que Sabana Centro tiene para ofrecer</p>
        </section>

        <figure className="content_eventsDestacados">
          {destacados.map((event) => (
            <div className="contentDestacados">
              <CardsEvents
                key={event.id}
                categoryMain={event.categoriaPrincipal}
                titleEvent={event.titulo}
                descriptionEvent={event.texto}
                locationEvent={event.ubicacion}
                dateEvent={event.fecha}
                tagsEvent={event.categoria}
                imageEvent={event.img}
                proximo={event.proximo}
                destacado={event.destacado}
              />
            </div>
          ))}
        </figure>

        <section className="introductionSection">
          <h2 className="titleEvents txtGradients">Próximos Eventos</h2>
          <p className="txt">No te pierdas estas experiencias cercanas</p>
        </section>

        <figure className="content_eventsProximos">
          {proximos.map((event) => (
            <div className="contentProximos">
              <CardsEvents
                key={event.id}
                categoryMain={event.categoriaPrincipal}
                titleEvent={event.titulo}
                descriptionEvent={event.texto}
                locationEvent={event.ubicacion}
                dateEvent={event.fecha}
                tagsEvent={event.categoria}
                imageEvent={event.img}
                proximo={event.proximo}
                destacado={event.destacado}
              />
            </div>
          ))}
        </figure>
      </article>
    </>
  );
}
