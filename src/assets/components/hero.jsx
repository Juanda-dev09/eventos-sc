import { CarouselEventosSC } from "../UI/carousel";
import { NavbarEventosSC } from "./navbar";

export function HeroPage() {
  return (
    <>
      <article className="content__allHeroPage-eventosSC">
        <nav className="content-navbar-eventosSC">
          <NavbarEventosSC />
        </nav>

        <section className="contentCarousel">
          <CarouselEventosSC />
        </section>
      </article>
    </>
  );
}
