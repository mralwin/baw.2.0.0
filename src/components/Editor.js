import React, { Component } from "react";
import Day from "./Day";
import DayW from "./presentational/DayW";
import Button from "./presentational/Button";

class Editor extends Component {
  handleClick = () => {
    const gName = Date.now();
    this.props.addDay(gName);
  };
  render() {
    return (
      <div>
        <h2>I AM THE EDITOR</h2>
        {Object.keys(this.props.days).map((day, i) => (
          <DayW key={i}>
            <Day {...this.props} key={i} i={i} day={day} />
          </DayW>
        ))}
        <Button onClick={this.handleClick}>Add Day</Button>
      </div>
    );
  }
}

export default Editor;
