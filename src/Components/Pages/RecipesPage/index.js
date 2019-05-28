import React, { Component } from "react";
import { HeroTemplate } from "../../Common/Templates/";
import { TypeOfRecipe } from "../../Recipes/";
import "./style.css";

class RecipesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      savedRecipes: null
    };
  }
  ID = () => {
    return Math.random()
      .toString(36)
      .substr(2, 9);
  };
  deliverRecipes = () => {
    let parsedRecipes = [],
    days = ["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"];
    let i;
    for (i = 0; i < 7; i++) {
      parsedRecipes.push(
        <TypeOfRecipe
          key={this.ID()}
          type="weeklyRecipe"
          title="Recept 1"
          content="Dessa ska senare hämtas dynamiskt."
          day={days[i]}
          recipe={this.props.recipes[i]}
        />
      );
    }
    return parsedRecipes;
  };
  render() {
    return (
      <>
        <HeroTemplate title="Your weekly recipe" />
        <div className="weekly-recipe container">
          <div className="recipe">
            <h2>Veckomeny</h2>
            {this.deliverRecipes()}
          </div>
        </div>
      </>
    );
  }
}

export default RecipesPage;
