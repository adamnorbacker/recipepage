import React, { Component } from "react";
import { HeroTemplate } from "../../Common/Templates/";
import { TypeOfRecipe, SaveRecipeButton } from "../../Recipes/";
import "./style.css";

class RecipesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      savedRecipes: null
    };
  }

  componentDidMount() {
    let parsedRecipes = [],
      days = [
        "Måndag",
        "Tisdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lördag",
        "Söndag"
      ];
    let i;
    for (i = 0; i < 7; i++) {
      parsedRecipes.push(
        <TypeOfRecipe
          key={i}
          type="weeklyRecipe"
          title="Recept 1"
          content="Dessa ska senare hämtas dynamiskt."
          day={days[i]}
          recipe={this.props.recipes[i]}
        />
      );
    }
    this.setState({
      savedRecipes: parsedRecipes
    });
  }

  render() {
    const { savedRecipes } = this.state;
    return (
      <>
        <HeroTemplate title="Your weekly recipe" />
        <div className="weekly-recipe container">
          <div className="recipe">
            <h2 className="weekly-menu-title">Veckomeny</h2>
            {savedRecipes}
          </div>
        </div>
        <div className="save-recipe-container">
          <SaveRecipeButton recipe={savedRecipes} />
        </div>
      </>
    );
  }
}

export default RecipesPage;
