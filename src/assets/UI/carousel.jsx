import { ChevronRightIcon } from "lucide-react";
import "../CSS/carousel.css";

export function CarouselEventosSC() {
  return (
    <>
      <article className="content__allCarouselPage-eventosSC">
        <section className="content_introductionEvents">
          <span className="data">
            <span className="circle"></span> 12-10 del 2025 / Chía
          </span>

          <h1 className="titleEvent">Festival Nocturno Sabana Beats 2025</h1>

          <p className="txt">
            Vive la experiencia más vibrante de Sabana Centro. Música, luces y
            cultura reunidas en una sola noche inolvidable.
          </p>

          <section className="bx-CTA-Events">
            <button className="tickets">Entradas</button>

            <div className="bx-allEvents">
              <span className="txtAllEvents">Todos los eventos</span>
              <div className="bx-iconArrowRight">
                <ChevronRightIcon />
              </div>
            </div>
          </section>
        </section>

        <div className="bx-controlsCarousel">
          <span className="circleControlCarousel imageCarouselActive"></span>
          <span className="circleControlCarousel"></span>
          <span className="circleControlCarousel"></span>
          <span className="circleControlCarousel"></span>
        </div>
      </article>
    </>
  );
}
