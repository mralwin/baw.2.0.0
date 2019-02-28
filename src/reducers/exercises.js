function exercises(state = [], action) {
  switch (action.type) {
    case "ADD_EXERCISE":
      return [
        ...state,
        {
          name: action.name
        }
      ];
    default:
      return state;
  }
}

export default exercises;

/*
case "EDIT_EXERCISES":
      return [
        ...state.slice(0, action.index),
        { ...state[action.index], name: action.name },
        ...state.slice(action.index + 1)
      ];
    case "DELETE_EXERCISES":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
      */
