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
      const day1 = state[action.day];
      return {
        ...state,
        [action.day]: {
          ...day1,
          name: action.name
        }
      };
    case "DELETE_DAY":
      let copy = Object.assign({}, state);
      delete copy[action.day];
      return copy;
    case "ADD_EXERCISE_TO_ALL":
      // Look up the correct day, to simplify the rest of the code
      const day = state[action.dayId];
      return {
        ...state,
        // Update our day object with a new "exercises" array
        [action.dayId]: {
          ...day,
          exercises: day.exercises.concat(action.exerciseId)
        }
      };
    case "ADD_EXERCISE":
      // Look up the correct day, to simplify the rest of the code
      const day3 = state[action.dayId];
      return {
        ...state,
        // Update our day object with a new "exercises" array
        [action.dayId]: {
          ...day3,
          exercises: day3.exercises.concat(action.eId)
        }
      };
    case "REMOVE_FROM_DAY":
      const day2 = state[action.dayId];
      const filtered = day2.exercises.filter(
        item => item !== action.exerciseId
      );
      return {
        ...state,
        [action.dayId]: {
          ...day2,
          exercises: filtered
        }
      };
    default:
      return state;
  }
}

export default days;
