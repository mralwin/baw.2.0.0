import React, { Component } from "react";
import Selector from "./Selector";

class Main extends Component {
  render() {
    return (
      <div>
        <h2>I AM MAIN</h2>
        <Selector {...this.props} />
      </div>
    );
  }
}

export default Main;
