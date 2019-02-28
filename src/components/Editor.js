import React, { Component } from "react";
import Day from "./Day";
import DayW from "./presentational/DayW";
import Button from "./presentational/Button";

class Editor extends Component {
  render() {
    return (
      <div>
        <h2>I AM THE EDITOR</h2>
        {this.props.days.map((day, i) => (
          <DayW key={i}>
            <Day {...this.props} key={i} i={i} post={day} />
          </DayW>
        ))}
        <Button onClick={this.props.addDay}>Add Day</Button>
      </div>
    );
  }
}

export default Editor;
