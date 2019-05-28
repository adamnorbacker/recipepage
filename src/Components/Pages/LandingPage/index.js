import React, { Component } from "react";
import { TypeOfRecipe } from "../../Recipes/index.js";
import { HeroTemplate } from "../../Common/Templates/";
import "./style.css";

class LandingPage extends Component {
  ID = () => {
    return Math.random()
      .toString(36)
      .substr(2, 9);
  };
  deliverRecipes = () => {
    let parsedRecipes = [],
    days = ["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"];
    let i;
    for (i = 0; i < 3; i++) {
      parsedRecipes.push(
        <TypeOfRecipe
          key={this.ID()}
          type="popularRecipe"
          title="Recept 1"
          content="Dessa ska senare hämtas dynamiskt."
          recipe={this.props.recipes[i]}
        />
      );
    }
    return parsedRecipes;
  };
  render() {
    return (
      <>
        <div className="landing_page">
          <HeroTemplate title="Simple recipes for your health" />
          <div className="todaysrecipes">
            <h2>Today</h2>
            <div className="grid _3col-fixed container">
            {this.deliverRecipes()}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
