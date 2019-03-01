function days(state = [], action) {
  switch (action.type) {
    case "ADD_DAY":
      return {
        ...state,
        [action.name]: {
          exercises: [],
          name: "day"
        }
      };
    case "EDIT_DAY":
      return {
        ...state,
        [action.day]: {
          exercises: [],
          name: action.name
        }
      };
    case "DELETE_DAY":
      console.log(action.day);
      const stateObj = { ...state };
      return Object.keys(stateObj)
        .filter(key => key !== action.day)
        .reduce((result, current) => {
          result[current] = stateObj[current];
          return result;
        }, {});
    case "ADD_EXERCISE_TO_ALL":
      // Look up the correct day, to simplify the rest of the code
      // const day = state[action.dayId];
      const AEA = { ...state };
      console.log(AEA[action.dayId].exercises);
      const day = state[action.dayId];
      return {
        ...state,
        // Update our day object with a new "exercises" array
        [action.dayId]: {
          ...day,
          exercises: day.exercises.concat(action.exerciseId)
        }
      };
    default:
      return state;
  }
}

export default days;
