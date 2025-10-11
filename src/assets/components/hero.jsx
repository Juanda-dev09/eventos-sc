import { useState, useEffect } from "react";
import { CarouselEventosSC } from "../UI/carousel";
import { NavbarEventosSC } from "./navbar";
import "../CSS/hero.css";
import data from "../JSON/data.json";

export function HeroPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <article className="content__allHeroPage-eventosSC">
        <nav className="content-navbar-eventosSC">
          <NavbarEventosSC />
        </nav>

        <section className="contentCarousel">
          {data.map((evento, index) => (
            <div
              key={evento.id}
              className={`carouselItem ${
                index === activeIndex ? "active" : "hidden"
              }`}
            >
              <CarouselEventosSC
                fecha={evento.fecha}
                ciudad={evento.ciudad}
                titleEvent={evento.titulo}
                descriptionEvent={evento.texto}
                imageEvent={evento.img}
                triggerAnimation={activeIndex}
              />
            </div>
          ))}

          <div className="bx-controlsCarousel">
            {data.map((_, index) => (
              <span
                key={index}
                className={`circleControlCarousel ${
                  index === activeIndex ? "imageCarouselActive" : ""
                }`}
                onClick={() => handleSelect(index)}
              ></span>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
