// add day
export function addDay(name) {
  return {
    type: "ADD_DAY",
    name
  };
}

// edit day
export function editDay(index, name) {
  return {
    type: "EDIT_DAY",
    index,
    name
  };
}

// remove day

export function deleteDay(index) {
  return {
    type: "DELETE_DAY",
    index
  };
}

export function addExercise(name) {
  return {
    type: "ADD_EXERCISE",
    name
  };
}
