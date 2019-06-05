import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./typeOfRecipe.css";

class TypeOfRecipe extends Component {
  render() {
    const {
      type: recipeType,
      recipe: { category, day, ingredients, mainIngredient, title }
    } = this.props;

    const listRecipes = ingredients.map((item, index) => {
      return (
        <li key={index}>
          <i className="fas fa-angle-right" />
          <p className="recipe-ingredient">{item}</p>
        </li>
      );
    });

    const categories = category.map((item, index) => {
      return (
        <Link key={index} className="categories" to="#">
          {item}
        </Link>
      );
    });

    if (recipeType === "popularRecipe") {
      return (
        <div className="card popular-recipe">
          <h3 className="recipe-title">{title}</h3>
          <div className="recipe-text-content">
            <ul className="recipe-details">{listRecipes}</ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card">
          <h3 className="recipe-day">
            {day}: {title}
          </h3>
          <div className="category">
            <p className="first-letter-uppercase">{categories}</p>
          </div>
          <div className="recipe-text-content">
            <div className="recipe-details">
              <h4>Ingredienser: </h4>
              <ul>
                <li className="main-ingredient">
                  <i className="fas fa-angle-right" />
                  <p className="recipe-ingredient">
                    <b className="first-letter-uppercase">{mainIngredient}</b>
                  </p>
                </li>
                {listRecipes}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default TypeOfRecipe;
