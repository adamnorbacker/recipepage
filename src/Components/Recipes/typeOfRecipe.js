import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./typeOfRecipe.css";
import { parseRecipes } from "../../utils";

class TypeOfRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecipes: parseRecipes(),
      currentRecipe: this.props.recipe,
      theWeeklyRecipes: null
    };
  }
  removeGenerateDay = (theNewRecipes, theCurrentRecipe, retried) => {
    const allRecipes = parseRecipes("random");
    const { week } = this.props;
    const {
      currentRecipe,
      currentRecipe: { day },
      theWeeklyRecipes
    } = this.state;
    let weeklyRecipes;
    if (theNewRecipes === null) {
      weeklyRecipes = JSON.parse(localStorage.getItem(`weekly-menu-${week}`));
      theCurrentRecipe = currentRecipe;
    } else {
      weeklyRecipes = theNewRecipes;
      this.setState({
        currentRecipe: theCurrentRecipe
      });
    }
    if (theWeeklyRecipes !== null) {
      weeklyRecipes = theWeeklyRecipes;
    }
    let newRecipe = null;
    let dayAfterRecipe = null;
    for (let i = 0; i < weeklyRecipes.length; i++) {
      let weekRecipe = weeklyRecipes[i];
      if (i + 1 !== weeklyRecipes.length) {
        if (
          weekRecipe.title.charAt(0).toUpperCase() ===
            theCurrentRecipe.title.charAt(0).toUpperCase() &&
          weekRecipe.day.charAt(0).toUpperCase() ===
            theCurrentRecipe.day.charAt(0).toUpperCase()
        ) {
          dayAfterRecipe = weeklyRecipes[i + 1];
          break;
        }
      }
    }

    for (let i = 0; i < allRecipes.length - 1; i++) {
      if (
        dayAfterRecipe.category.toString() !==
          allRecipes[i + 1].category.toString() &&
        dayAfterRecipe.mainIngredient !== allRecipes[i + 1].mainIngredient
      ) {
        newRecipe = allRecipes[i + 1];
        newRecipe.day = day;
        break;
      }
    }
    if (newRecipe !== null) {
      const newWeeklyRecipes = weeklyRecipes.map((weekRecipe, index, array) => {
        if (newRecipe.day === weekRecipe.day) {
          theCurrentRecipe = newRecipe;
          weekRecipe = newRecipe;
        }
        return weekRecipe;
      });
      localStorage.setItem(
        `weekly-menu-${week}`,
        JSON.stringify(newWeeklyRecipes)
      );
      this.setState({
        currentRecipe: newRecipe,
        theWeeklyRecipes: newWeeklyRecipes
      });
    }
  };

  render() {
    const { type: recipeType } = this.props;
    const {
      currentRecipe: { category, day, ingredients, mainIngredient, title }
    } = this.state;
    const listRecipes = ingredients.map((item, index) => {
      return (
        <li key={index}>
          <p className="recipe-ingredient">{item}</p>
          <span className="ingredient-seperator">,</span>
        </li>
      );
    });

    const categories = category.map((item, index, array) => {
      return (
        <Link key={index} className="categories" to="#">
          {item}
          {category.length > 1 && array[index + 1] ? ", " : ""}
        </Link>
      );
    });

    if (recipeType === "popularRecipe") {
      return (
        <div className="card popular-recipe">
          <h3 className="recipe-title">{title}</h3>
          <div className="recipe-text-content">
            <ul className="recipe-details">{listRecipes}</ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card">
          <h3 className="recipe-day">
            <span className="day">{day}: </span>
            {title}
          </h3>
          <div className="category">
            <p className="first-letter-uppercase">{categories}</p>
          </div>
          <div className="recipe-text-content">
            <div className="recipe-details">
              <h4>Ingredienser: </h4>
              <ul>
                <li className="main-ingredient">
                  <i className="fas fa-angle-right" />
                  <p className="recipe-ingredient">
                    <b className="first-letter-uppercase">{mainIngredient}</b>
                    <span className="ingredient-seperator">,</span>
                  </p>
                </li>
                {listRecipes}
              </ul>
            </div>
            <i
              className="fas fa-pen"
              title="Ändra"
              onClick={() => this.removeGenerateDay(null, null, false)}
            />
          </div>
        </div>
      );
    }
  }
}

export default TypeOfRecipe;
