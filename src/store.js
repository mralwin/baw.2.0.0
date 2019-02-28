import { createStore } from "redux";
import days from "./data/days";

// import the root reducer
import rootReducer from "./reducers/index";

// create an object for the default data
const defaultState = { days };

const store = createStore(rootReducer, defaultState);

export default store;
