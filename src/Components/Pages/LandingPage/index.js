import React, { Component } from "react";
import { TypeOfRecipe } from "../../Recipes/index.js";
import { HeroTemplate } from "../../Common/Templates/";
import "./style.css";

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="landing_page">
          <HeroTemplate title="Simple recipes for your health" />
          <div className="todaysrecipes">
            <h2>Today</h2>
            <div className="grid _3col-fixed container">
              <TypeOfRecipe
                type="popularRecipe"
                title="Recept 1"
                content="Dessa ska senare hämtas dynamiskt."
                recipe={this.props.recipes[0]}
              />
              <TypeOfRecipe
                type="popularRecipe"
                title="Recept 2"
                content="Dessa ska senare hämtas dynamiskt."
                recipe={this.props.recipes[1]}
              />
              <TypeOfRecipe
                type="popularRecipe"
                title="Recept 3"
                content="Dessa ska senare hämtas dynamiskt."
                recipe={this.props.recipes[2]}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
