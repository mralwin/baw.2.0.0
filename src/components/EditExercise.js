import React, { Component } from "react";
import Button from "./presentational/Button";

class EditExercise extends Component {
  handleClick = () => {
    this.props.removeFromDay(this.props.day, this.props.exercise);
    if (this.props.exercises[this.props.exercise].count === 1) {
      this.props.deleteExercise(this.props.exercise);
    }
  };
  render() {
    return (
      <div>
        <h2>I AM edit exercise</h2>
        {this.props.exercises[this.props.exercise].name}
        <Button inner onClick={this.handleClick}>
          Delete
        </Button>
      </div>
    );
  }
}

export default EditExercise;
