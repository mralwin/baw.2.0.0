function days(state = [], action) {
  switch (action.type) {
    case "ADD_DAY":
      return [
        ...state,
        {
          exercises: [],
          name: action.name
        }
      ];
    default:
      return state;
  }
}

export default days;
