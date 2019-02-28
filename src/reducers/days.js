function days(state = [], action) {
  switch (action.type) {
    case "ADD_DAY":
      return [
        ...state,
        {
          exercises: [],
          name: "day"
        }
      ];
    case "EDIT_DAY":
      return [
        ...state.slice(0, action.index),
        { ...state[action.index], name: action.name },
        ...state.slice(action.index + 1)
      ];
    case "DELETE_DAY":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

export default days;
