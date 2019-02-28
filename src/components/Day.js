import React, { Component } from "react";
import Button from "./presentational/Button";
import SelectorDefault from "./SelectorDefault";
import WrapperModal from "./presentational/WrapperModal";
import Modal from "react-modal";

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
  render() {
    return (
      <div>
        <h2>I AM {this.props.days[this.props.i].name}</h2>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.days[this.props.i].name}
        />

        <Button inner onClick={this.handleOpenModal}>
          Add Exercise
        </Button>
        <WrapperModal isOpen={this.state.showModal}>
          <SelectorDefault />
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
