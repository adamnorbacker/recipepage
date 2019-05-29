import React, { Component } from "react";

class ScreenLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      shown: ""
    };
  }

  componentDidMount() {
    const { active } = this.props;
    const { shown } = this.state;
    if (active) {
      this.setState({
        shown: "active"
      });
    }
  }

  render() {
    const { shown } = this.state;
    return (
      <>
        <div className={`loader ${shown}`}>
          <i className="fas fa-spinner" />
        </div>
      </>
    );
  }
}

export default ScreenLoader;
