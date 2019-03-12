function exercises(state = [], action) {
  switch (action.type) {
    case "ADD_EXERCISE":
      const exercises2 = state[action.eId];
      const newCount = exercises2.count + 1;
      return {
        ...state,
        [action.eId]: {
          ...exercises2,
          count: newCount
        }
      };
    case "DELETE_EXERCISE":
      let copy = Object.assign({}, state);
      delete copy[action.exercise];
      return copy;
    case "ADD_EXERCISE_TO_ALL":
      return {
        ...state,
        [action.exerciseId]: {
          name: action.name,
          sets: action.sets
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
