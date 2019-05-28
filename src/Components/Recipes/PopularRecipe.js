import React, { Component } from "react";
class PopularRecipe extends Component {
  render() {
    return (
      <>
      <div className="card">
        <h3 className="recipe-title">{this.props.title}</h3>
        <div className="recipe-text-content">
          <p>{this.props.content}</p>
        </div>
        </div>
      </>
    );
  }
}

export default PopularRecipe;
