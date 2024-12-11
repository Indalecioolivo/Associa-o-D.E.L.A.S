import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuImg from "../../assets/sandwich.png";

export default function Header() {
  return (
    <header className="header-container">
      <nav>
        <img
          src={MenuImg}
          alt=""
          className="mobile-menu"
          onClick={(e) => handleClickMenu(e)}
        />
        <a href="/" className="logo">
          Associação D.E.L.A.S
        </a>
        <ul className="nav-list">
          <li>
            <Link to="/">
              <a href="">Página Inicial</a>
            </Link>
          </li>
          <li>
            <Link to="/events">
              <a href="/events">Eventos</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
