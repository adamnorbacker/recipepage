import React, { Component } from "react";
import "./typeOfRecipe.css";

class TypeOfRecipe extends Component {
  render() {
    const recipeType = this.props.type;
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
          <h4 className="recipe-day">{this.props.day}</h4>
          <h3 className="recipe-title">{this.props.recipe.title}</h3>
          <div className="recipe-text-content">
            {this.props.recipe.days}
            {showDetails ? (
              <ul className="recipe-details">{listRecipes}</ul>
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
