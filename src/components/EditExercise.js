import React, { Component } from "react";
import Button from "./presentational/Button";

class EditExercise extends Component {
  handleClick = () => {
    this.props.removeFromDay(this.props.day, this.props.exercise);
    if (this.props.exercises[this.props.exercise].count === 1) {
      this.props.deleteExercise(this.props.exercise);
    }
  };

  handleChange = event => {
    const updatedExercise = event.currentTarget.value;

    this.props.updateExercise(
      this.props.index,
      event.currentTarget.name,
      updatedExercise
    );
  };

  render() {
    return (
      <div>
        <h2>I AM edit exercise</h2>

        {this.props.exercise.sets}
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.exercises[this.props.exercise].name}
        />
        <input
          type="text"
          name="set"
          onChange={this.handleChange}
          value={this.props.exercises[this.props.exercise].sets}
        />
        <input
          type="text"
          name="rep"
          onChange={this.handleChange}
          value={this.props.exercise.rep}
        />
        <input
          type="text"
          name="rest"
          onChange={this.handleChange}
          value={this.props.exercise.rest}
        />
        <input
          type="text"
          name="weight"
          onChange={this.handleChange}
          value={this.props.exercise.weight}
        />
        <Button inner onClick={this.handleClick}>
          Delete
        </Button>
      </div>
    );
  }
}

export default EditExercise;
