import React, { Component } from "react";
import { HeroTemplate } from "../../Common/Templates/";
import { WeeklyMenu } from "../../Recipes/";
import "./style.css";

class SavedRecipesPage extends Component {
  render() {
    return (
      <>
        <HeroTemplate title="Your saved recipes" />
        <WeeklyMenu />
      </>
    );
  }
}

export default SavedRecipesPage;
