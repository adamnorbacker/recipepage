import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

class Menu extends Component {
  render() {
    return (
      <>
        <header className="menu">
          <div className="menu_container">
            <h1 className="logo">QFit</h1>
            <ul>
              <li className="menu_item">
                <NavLink exact to="/" activeClassName="active">
                  Hem
                </NavLink>
              </li>
              <li className="menu_item">
                <NavLink to="/weekly/" activeClassName="active">
                  Veckomeny
                </NavLink>
              </li>
              <li className="menu_item">
                <NavLink to="/recipes/" activeClassName="active">
                  Recept
                </NavLink>
              </li>
              <li className="menu_item">
                <NavLink to="/faq/" activeClassName="active">
                  FAQ
                </NavLink>
              </li>
              <li className="menu_item">
                <NavLink to="/contact/" activeClassName="active">
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </div>
        </header>
      </>
    );
  }
}

export default Menu;
