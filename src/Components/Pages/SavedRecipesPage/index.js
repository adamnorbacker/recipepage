import React, { Component } from "react";
import { HeroTemplate } from "../../Common/Templates/";
import { TypeOfRecipe } from "../../Recipes/";
import "./style.css";

class SavedRecipesPage extends Component {
  getRecipes = () => {
    const { recipes } = this.props;
    const allRecipes = recipes.map((item, index) => {
      return (
        <TypeOfRecipe
          key={index}
          type="weeklyRecipe"
          content="Dessa ska senare hämtas dynamiskt."
          recipe={item}
        />
      );
    });
    return allRecipes;
  };
  render() {
    return (
      <>
        <HeroTemplate title="Alla recept" />
        <div className="weekly-recipe container all-recipes">
          <h2>Alla recept</h2>
          <div className="recipe">{this.getRecipes()}</div>
        </div>
      </>
    );
  }
}

export default SavedRecipesPage;
