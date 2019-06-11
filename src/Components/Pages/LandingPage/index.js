import React, { Component } from "react";
import { TypeOfRecipe } from "../../Recipes/index.js";
import { HeroTemplate } from "../../Common/Templates/";
import "./style.css";

class LandingPage extends Component {
  deliverRecipes = () => {
    let parsedRecipes = [];
    let i;
    for (i = 0; i < 3; i++) {
      parsedRecipes.push(
        <TypeOfRecipe
          key={i}
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
          <HeroTemplate title="QFit" subTitle="Enklra recept för din hälsa" />
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
