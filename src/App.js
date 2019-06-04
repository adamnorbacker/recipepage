import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  LandingPage,
  RecipesPage,
  SavedRecipesPage
} from "./Components/Pages/index.js";
import { Menu } from "./Components/Common";
import { parseRecipes } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularRecipes: parseRecipes("popularRecipe"),
      weeklyRecipes: parseRecipes("weeklyRecipes")
    };
  }
  render() {
    const { popularRecipes, weeklyRecipes } = this.state;
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
                  <SavedRecipesPage {...props} recipes={weeklyRecipes} />
                )}
              />
            </div>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
