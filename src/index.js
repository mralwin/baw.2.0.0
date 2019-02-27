import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router";
import { Provider } from "react-redux";
import store from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  rootElement
);
