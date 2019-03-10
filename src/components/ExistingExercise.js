import React, { Component } from "react";
import Select from "./presentational/Select";
import Button from "./presentational/Button";

class ExistingExercise extends Component {
  eRef = React.createRef();
  handleClick = event => {
    this.props.addExercise(this.props.day, this.eRef.current.value);
  };
  render() {
    return (
      <div>
        <Select ref={this.eRef}>
          {Object.keys(this.props.exercises).map((exercise, i) => (
            <option value={exercise} key={i}>
              {this.props.exercises[exercise].name}
            </option>
          ))}
        </Select>
        <Button onClick={this.handleClick}>Add Existing Exercise</Button>
      </div>
    );
  }
}

export default ExistingExercise;
