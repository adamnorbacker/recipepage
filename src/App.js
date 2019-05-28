import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LandingPage, RecipesPage } from "./Components/Pages/index.js";
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
    console.log(this.state.weeklyRecipes);
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
                  <LandingPage {...props} recipes={this.state.popularRecipes} />
                )}
              />
              <Route
                exact
                path="/recipes/"
                render={props => (
                  <RecipesPage {...props} recipes={this.state.weeklyRecipes} />
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
