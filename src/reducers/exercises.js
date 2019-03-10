function exercises(state = [], action) {
  switch (action.type) {
    case "ADD_EXERCISE":
      // Look up the correct day, to simplify the rest of the code
      const exercises2 = state[action.eId];
      const newCount = exercises2.count + 1;
      return {
        ...state,
        // Update our day object with a new "exercises" array
        [action.eId]: {
          ...exercises2,
          // need to work on below
          count: newCount
          // need to work on above
        }
      };
    case "DELETE_EXERCISE":
      let copy = Object.assign({}, state); // assuming you use Object.assign() polyfill!
      delete copy[action.exercise]; // shallowly mutating a shallow copy is fine
      return copy;
    case "ADD_EXERCISE_TO_ALL":
      return {
        ...state,
        [action.exerciseId]: {
          name: action.name
        }
      };
    case "REMOVE_FROM_DAY":
      const exercises1 = state[action.exerciseId];
      const counter = exercises1.count - 1;
      return {
        ...state,
        [action.exerciseId]: {
          ...exercises1,
          count: counter
        }
      };
    default:
      return state;
  }
}

export default exercises;

/*
const stateObj = { ...state };
      console.log("im the reducer");
      return Object.keys(stateObj)
        .filter(key => key !== action.exercise)
        .reduce((result, current) => {
          result[current] = stateObj[current];
          return result;
        }, {});
      */
