import { BellIcon, SearchIcon } from "lucide-react";
import logoPage from "../icons/logoEventosSC.svg";
import "../CSS/navbar.css";

export function NavbarEventosSC() {
  return (
    <>
      <article className="content__allNavbarPage-eventosSC">
        <div className="bx-logo">
          <img src={logoPage} alt="" className="logo" />
        </div>

        <article className="content__allSectionNavbar">
          <section className="contentNavbar-eventosSC">
            <ul className="navbar-eventosSC">
              <li className="itemsNavbar-eventosSC">
                <a href="#" className="linksNavbar-eventosSC navbarActive">
                  Inicio
                </a>
              </li>
              <li className="itemsNavbar-eventosSC">
                <a href="#" className="linksNavbar-eventosSC">
                  Eventos
                </a>
              </li>
              <li className="itemsNavbar-eventosSC">
                <a href="#" className="linksNavbar-eventosSC">
                  Festivales
                </a>
              </li>
              <li className="itemsNavbar-eventosSC">
                <a href="#" className="linksNavbar-eventosSC">
                  Actividades
                </a>
              </li>
              <li className="itemsNavbar-eventosSC">
                <a href="#" className="linksNavbar-eventosSC">
                  Categorias
                </a>
              </li>
            </ul>
          </section>

          <section className="contentSearch-and-profile">
            <div className="bx-search-input">
              <div className="search">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="inputSearch-eventosSC"
              />
            </div>

            <div className="bx-notifications">
              <BellIcon />
            </div>

            <section className="bx-profile-and-other-options"></section>
          </section>
        </article>
      </article>
    </>
  );
}
