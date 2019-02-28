import React, { Component } from "react";
import Button from "./presentational/Button";
import AddExercise from "./AddExercise";
import EditExercise from "./EditExercise";
import WrapperModal from "./presentational/WrapperModal";

class Day extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleChange = event => {
    this.props.editDay(this.props.i, event.currentTarget.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          placeholder="Day Name"
        />

        {this.props.days[this.props.i].exercises.map((exercise, i) => (
          <EditExercise {...this.props} key={i} i={i} exercise={exercise} />
        ))}

        <Button inner onClick={this.handleOpenModal}>
          Add Exercise
        </Button>
        <WrapperModal isOpen={this.state.showModal}>
          <AddExercise />
          <Button onClick={this.handleCloseModal}>Close</Button>
        </WrapperModal>

        <Button inner onClick={this.props.deleteDay.bind(null, this.props.i)}>
          Delete Day
        </Button>
      </div>
    );
  }
}

export default Day;
