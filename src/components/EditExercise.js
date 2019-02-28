import React, { Component } from "react";

class EditExercise extends Component {
  render() {
    return (
      <div>
        <h2>I AM edit exercise</h2>
        {this.props.exercises[this.props.exercise].name}
      </div>
    );
  }
}

export default EditExercise;
