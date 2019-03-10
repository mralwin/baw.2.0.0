import React, { Component } from "react";
import ExistingExercise from "./ExistingExercise";
import Button from "./presentational/Button";

class AddExercise extends Component {
  nameRef = React.createRef();
  handleClick = event => {
    this.props.addExerciseToAll(this.props.day, this.nameRef.current.value);
    document.getElementById("aform").reset();
  };
  render() {
    return (
      <div>
        <form id="aform">
          <input
            type="text"
            name="name"
            ref={this.nameRef}
            placeholder="Exercise Name"
            maxLength="14"
          />
        </form>
        <Button inner onClick={this.handleClick}>
          Add Exercise
        </Button>
        <ExistingExercise {...this.props} day={this.props.day} />
      </div>
    );
  }
}

export default AddExercise;
