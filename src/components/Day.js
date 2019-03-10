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
    this.props.editDay(this.props.day, event.currentTarget.value);
  };

  handleClick = () => {
    this.props.deleteDay(this.props.day);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          placeholder="Day Name"
          maxLength="14"
        />

        {this.props.days[this.props.day].exercises.map((exercise, i) => (
          <EditExercise
            {...this.props}
            key={i}
            i={i}
            exercise={exercise}
            day={this.props.day}
          />
        ))}

        <Button inner onClick={this.handleOpenModal}>
          Add Exercise
        </Button>

        <WrapperModal isOpen={this.state.showModal}>
          <AddExercise {...this.props} />
          <Button onClick={this.handleCloseModal}>Close</Button>
        </WrapperModal>

        <Button inner onClick={this.handleClick}>
          Delete Day
        </Button>
      </div>
    );
  }
}

export default Day;
