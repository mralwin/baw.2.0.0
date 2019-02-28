import React, { Component } from "react";
import SelectorDefault from "./SelectorDefault";
import Editor from "./Editor";
import CurrentDay from "./CurrentDay";
import Button from "./presentational/Button";

class Selector extends Component {
  state = { show: SelectorDefault };

  showEditor = () => {
    this.setState({ show: Editor });
  };

  showCurrent = () => {
    this.setState({ show: CurrentDay });
  };

  showDefault = () => {
    this.setState({ show: SelectorDefault });
  };

  render() {
    if (this.state.show === SelectorDefault) {
      return (
        <div>
          <Button onClick={this.showCurrent}>current workout</Button>
          <Button onClick={this.showEditor}>edit workout</Button>
          <SelectorDefault {...this.props} />
        </div>
      );
    }

    if (this.state.show === CurrentDay) {
      return (
        <div>
          <Button onClick={this.showDefault}>Home</Button>
          <Button onClick={this.showEditor}>edit workout</Button>
          <CurrentDay {...this.props} />
        </div>
      );
    }

    if (this.state.show === Editor) {
      return (
        <div>
          <Button onClick={this.showCurrent}>current workout</Button>
          <Button onClick={this.showDefault}>Home</Button>
          <Editor {...this.props} />
        </div>
      );
    }
  }
}

export default Selector;
