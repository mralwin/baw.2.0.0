import React from "react";

class Namer extends React.Component {
  myInput = React.createRef();

  goToWorkout = event => {
    event.preventDefault();
    const workoutName = this.myInput.current.value;
    this.props.history.push(`/workout/${workoutName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToWorkout}>
        <h2>Pick a name</h2>
        <input type="text" ref={this.myInput} requiered placeholder="Name" />
        <button type="submit">Generate!</button>
      </form>
    );
  }
}

export default Namer;
