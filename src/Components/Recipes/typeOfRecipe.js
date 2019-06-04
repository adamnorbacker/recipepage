import React, { Component } from "react";
import "./typeOfRecipe.css";

class TypeOfRecipe extends Component {
  render() {
    const {
      content,
      type: recipeType,
      recipe: { category, day, days, ingredients, mainIngredient, title },
      week
    } = this.props;

    let listRecipes = [],
      showDetails = true;
    if (recipeType === "popularRecipe") {
      if (showDetails) {
        const theRecipes = ingredients;
        listRecipes = theRecipes.map((item, index) => {
          return (
            <li key={index}>
              <i className="fas fa-angle-right" />
              <p className="recipe-ingredient">{item}</p>
            </li>
          );
        });
      }
      return (
        <div data-week={week} className="card">
          <h3 className="recipe-title">{title}</h3>
          <div className="recipe-text-content">
            {showDetails ? (
              <ul className="recipe-details">{listRecipes}</ul>
            ) : (
              <p>{content}</p>
            )}
          </div>
        </div>
      );
    } else if (recipeType === "weeklyRecipe") {
      if (showDetails) {
        const theIngredients = ingredients;

        listRecipes = theIngredients.map((item, index) => {
          return (
            <li key={index}>
              <i className="fas fa-angle-right" />
              <p className="recipe-ingredient">{item}</p>
            </li>
          );
        });
      }
      return (
        <div data-week={week} className="card">
          <h3 className="recipe-day">
            {day}: {title}
          </h3>
          <div className="category">
            <p className="first-letter-uppercase">{category}</p>
          </div>
          <div className="recipe-text-content">
            {days}
            {showDetails ? (
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
            ) : (
              <p>{content}</p>
            )}
          </div>
        </div>
      );
    }
  }
}

export default TypeOfRecipe;
