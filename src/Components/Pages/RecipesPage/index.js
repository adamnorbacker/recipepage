import React, { Component } from "react";
import { HeroTemplate } from "../../Common/Templates/";
import { TypeOfRecipe, SaveRecipeButton } from "../../Recipes/";
import "./style.css";

class RecipesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedRecipes: null,
      savedObjectRecipes: null,
      shown: "",
      notice: ""
    };
  }

  componentDidMount() {
    if (localStorage.getItem("weekly-menu") === null) {
      this.setState({
        notice: "active"
      });
    }
  }

  getWeek = () => {
    let theDate = new Date();
    theDate = new Date(
      Date.UTC(theDate.getFullYear(), theDate.getMonth(), theDate.getDate())
    );
    theDate.setUTCDate(theDate.getUTCDate() + 4 - (theDate.getUTCDay() || 7));
    let yearFirstDay = new Date(Date.UTC(theDate.getUTCFullYear(), 0, 1));
    let weekNumber = Math.ceil(((theDate - yearFirstDay) / 86400000 + 1) / 7);
    return weekNumber;
  };

  generateWeekly = () => {
    const { recipes } = this.props;
    let parsedRecipes = [];
    let objectRecipes = [],
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
          recipe={recipes[i]}
        />
      );
      recipes[i].day = days[i];
      objectRecipes.push(recipes[i]);
    }
    this.setState({
      savedRecipes: parsedRecipes,
      savedObjectRecipes: objectRecipes,
      notice: "",
      shown: "active"
    });
  };

  render() {
    const { savedRecipes, savedObjectRecipes, shown, notice } = this.state;
    return (
      <>
        <HeroTemplate title="Your weekly recipe" />
        <div className="weekly-recipe container">
          <div className="recipe">
            <h2 className="weekly-menu-title">Veckomeny v{this.getWeek()}</h2>
            <div className={`notice ${notice}`}>
              <p>
                Du har inte några veckomenyer tillgängliga, vill du generera en?
              </p>
              <div className="button-container align-right">
                <button
                  className="button bgorange"
                  onClick={this.generateWeekly}
                >
                  Generera
                  <i className="fas fa-angle-right" />
                </button>
              </div>
            </div>
            {savedRecipes}
          </div>
        </div>
        <div className={`save-recipe-container ${shown}`}>
          <SaveRecipeButton recipe={savedObjectRecipes} week={this.getWeek()} />
        </div>
      </>
    );
  }
}

export default RecipesPage;
