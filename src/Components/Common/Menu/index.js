import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./style.css";

class Menu extends Component {
    render() { 
        return ( <>
        <header className="menu">
            <h1 className="logo">QFit</h1>
            <ul className="menu_container">
                <li className="menu_item">
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                </li>
                <li className="menu_item">
                    <NavLink to="/recipes/" activeClassName="active">Recipes</NavLink>
                </li>
                <li className="menu_item">
                    <NavLink to="/my_recipes" activeClassName="active">My recipes</NavLink>
                </li>
                <li className="menu_item">
                    <NavLink to="/faq" activeClassName="active">FAQ</NavLink>
                </li>
                <li className="menu_item">
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
            </ul>
        </header>
        </> );
    }
}
 
export default Menu;
