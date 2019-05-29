import React, { Component } from "react";
import "./typeOfRecipe.css";

class TypeOfRecipe extends Component {
  render() {
    const recipeType = this.props.type;
    const category = this.props.recipe.category;
    const mainIngredient = this.props.recipe.mainIngredient;
    let listRecipes = [],
      showDetails = true;
    if (recipeType === "popularRecipe") {
      if (showDetails) {
        const theRecipes = this.props.recipe.ingredients;
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
        <div className="card">
          <h3 className="recipe-title">{this.props.recipe.title}</h3>
          <div className="recipe-text-content">
            {showDetails ? (
              <ul className="recipe-details">{listRecipes}</ul>
            ) : (
              <p>{this.props.content}</p>
            )}
          </div>
        </div>
      );
    } else if (recipeType === "weeklyRecipe") {
      if (showDetails) {
        const theIngredients = this.props.recipe.ingredients;

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
        <div className="card">
          <h3 className="recipe-day">
            {this.props.day}: {this.props.recipe.title}
          </h3>
          <div className="category">
            <p className="first-letter-uppercase">{category}</p>
          </div>
          <div className="recipe-text-content">
            {this.props.recipe.days}
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
              <p>{this.props.content}</p>
            )}
          </div>
        </div>
      );
    }
  }
}

export default TypeOfRecipe;
