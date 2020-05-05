import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import { createStore } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";

// STORE --> globalized store
let myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={myStore}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
