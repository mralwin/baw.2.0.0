import { combineReducers } from "redux";

import days from "./days";
import exercises from "./exercises";

const rootReducer = combineReducers({
  days,
  exercises
});

export default rootReducer;
