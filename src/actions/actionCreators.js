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

export function addExercise(dayId, eId) {
  return {
    type: "ADD_EXERCISE",
    dayId,
    eId
  };
}

export function addExerciseToAll(dayId, name) {
  // Generate a unique ID for this comment
  const exerciseId = Date.now();

  return {
    type: "ADD_EXERCISE_TO_ALL",
    dayId,
    exerciseId,
    name,
    count: 1,
    sets: 0
  };
}

//export function updateExercise(updatedExercise) {
//  return {
//    type: "ADD_EXERCISE",
//    updatedExercise
//  };
//}

export function removeFromDay(dayId, exerciseId) {
  return {
    type: "REMOVE_FROM_DAY",
    dayId,
    exerciseId
  };
}
