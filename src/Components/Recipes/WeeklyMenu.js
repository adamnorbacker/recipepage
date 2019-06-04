import React, { Component } from "react";
import TypeOfRecipe from "./typeOfRecipe";
import ScreenLoader from "../Common/Templates/Loader";

async function loadMenu() {
  const weekNumber = JSON.parse(localStorage.getItem("weeks"));

  if (Array.isArray(weekNumber)) {
    return weekNumber.map(weekNumber => ({
      recipe:
        JSON.parse(localStorage.getItem(`weekly-menu-${weekNumber}`)) || [],
      weekNumber
    }));
  } else {
    return {
      recipe:
        JSON.parse(localStorage.getItem(`weekly-menu-${weekNumber}`)) || [],
      weekNumber
    };
  }
}

class WeeklyMenu extends Component {
  state = { recipes: [], removed: false };

  async componentDidMount() {
    const recipes = await loadMenu();

    if (Array.isArray(recipes)) {
      this.setState({
        recipes: recipes.map(({ recipe, weekNumber }) => ({
          recipe,
          weekNumber,
          isRemoved: ""
        }))
      });
    } else {
      this.setState({
        recipes: [
          {
            recipe: recipes.recipe,
            weekNumber: recipes.weekNumber,
            isRemoved: ""
          }
        ]
      });
    }
  }

  getWeek = () => {
    let theDate = new Date();
    theDate = new Date(
      Date.UTC(theDate.getFullYear(), theDate.getMonth(), theDate.getDate())
    );
    theDate.setUTCDate(theDate.getUTCDate() + 4 - (theDate.getUTCDay() || 7));
    const yearFirstDay = new Date(Date.UTC(theDate.getUTCFullYear(), 0, 1));
    const weekNumber = Math.ceil(((theDate - yearFirstDay) / 86400000 + 1) / 7);
    return weekNumber;
  };

  buttonHandler = weekNumber => {
    const weeks = JSON.parse(localStorage.getItem("weeks"));
    if (Array.isArray(weeks)) {
      const removeWeek = weeks.filter(function(value) {
        return value !== weekNumber;
      });
      if (!Array.isArray(removeWeek) || !removeWeek.length) {
        localStorage.removeItem("weeks");
      } else {
        localStorage.setItem("weeks", removeWeek);
      }
    } else {
      localStorage.removeItem("weeks");
    }
    localStorage.removeItem(`weekly-menu-${weekNumber}`);
    this.setState({ recipes: null });
  };

  render() {
    const { recipes } = this.state;
    if (recipes === null) {
      return <span>No recipes</span>;
    }
    return recipes.map(({ recipe, weekNumber, isRemoved }, weekIndex) => {
      const isRemovedClassName = isRemoved ? "" : "active";
      return (
        <div
          key={weekIndex}
          className="weekly-recipe container weekly-component"
        >
          <div className="recipe">
            <div className={`notice ${isRemovedClassName}`}>
              <p>
                Du har inte några veckomenyer tillgängliga.
                <br />
                Titta tillbaka när du har sparat en veckomeny.
              </p>
            </div>
            <div className={`card-container ${isRemovedClassName}`}>
              <h2 className="weekly-menu-title">Veckomeny v{weekNumber}</h2>

              {recipe.map((recipe, recipeIndex) => (
                <TypeOfRecipe
                  key={weekIndex + "" + recipeIndex}
                  type="weeklyRecipe"
                  content="Dessa ska senare hämtas dynamiskt."
                  recipe={recipe}
                  week={weekNumber}
                />
              ))}
            </div>
            <div className={`remove-weekly-menu ${isRemovedClassName}`}>
              <button
                className="button bgorange"
                onClick={() => this.buttonHandler(weekNumber)}
              >
                Ta bort
                <i className="fas fa-angle-right" />
              </button>
            </div>
            <ScreenLoader type="Remove" />
          </div>
        </div>
      );
    });
  }
}

export default WeeklyMenu;
