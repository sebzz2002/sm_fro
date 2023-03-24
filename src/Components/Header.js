import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Augus Cart</h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink className="header__link" to="/">
              Add Products
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__link" to="/billing">
              Billing
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
