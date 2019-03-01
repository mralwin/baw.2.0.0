export function addDay(name) {
  return {
    type: "ADD_DAY",
    name
  };
}

export function editDay(day, name) {
  return {
    type: "EDIT_DAY",
    day,
    name
  };
}

export function deleteDay(day) {
  return {
    type: "DELETE_DAY",
    day
  };
}

export function addExercise(name) {
  return {
    type: "ADD_EXERCISE",
    name
  };
}

export function addExerciseToAll(dayId, name) {
  // Generate a unique ID for this comment
  const exerciseId = Date.now();

  return {
    type: "ADD_EXERCISE_TO_ALL",
    dayId,
    exerciseId,
    name
  };
}
