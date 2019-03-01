import React, { Component } from "react";
import Button from "./presentational/Button";

class AddExercise extends Component {
  handleClick = () => {
    this.props.addExerciseToAll(this.props.day, "test-exercise");
  };
  render() {
    return (
      <div>
        <h2>I AM add exercise</h2>
        <Button inner onClick={this.handleClick}>
          Add Exercise
        </Button>
      </div>
    );
  }
}

export default AddExercise;
