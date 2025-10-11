import { ChevronRightIcon } from "lucide-react";
import "../CSS/carousel.css";
import BlurText from "./blurText";

export function CarouselEventosSC({
  fecha,
  ciudad,
  titleEvent,
  imageEvent,
  descriptionEvent,
  triggerAnimation,
}) {
  return (
    <>
      <article
        className="content__allCarouselPage-eventosSC"
        style={{ background: `url(${imageEvent}) center no-repeat` }}
      >
        <section className="content_introductionEvents">
          <span className="data">
            <span className="circle"></span> {fecha} / {ciudad}
          </span>

          <h1 className="titleEvent">{titleEvent}</h1>

          <p className="txt">
            <BlurText
              triggerAnimation={triggerAnimation}
              text={descriptionEvent}
            />
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
      </article>
    </>
  );
}
