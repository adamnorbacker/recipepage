import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  LandingPage,
  RecipesPage,
  SavedRecipesPage,
  ShoppingList
} from "./Components/Pages";
import { Menu } from "./Components/Common";
import { parseRecipes } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularRecipes: parseRecipes("popularRecipe"),
      weeklyRecipes: parseRecipes("weeklyRecipes"),
      allRecipes: parseRecipes()
    };
  }
  render() {
    const { popularRecipes, weeklyRecipes, allRecipes } = this.state;
    return (
      <>
        <div className="main_container grid">
          <Router>
            <Menu />
            <div className="main-page">
              <Route
                exact
                path="/"
                render={props => (
                  <LandingPage {...props} recipes={popularRecipes} />
                )}
              />
              <Route
                exact
                path="/weekly/"
                render={props => (
                  <RecipesPage {...props} recipes={weeklyRecipes} />
                )}
              />
              <Route
                exact
                path="/recipes/"
                render={props => (
                  <SavedRecipesPage {...props} recipes={allRecipes} />
                )}
              />
              <Route
                exact
                path="/shoppinglist/"
                render={() => <ShoppingList />}
              />
            </div>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
