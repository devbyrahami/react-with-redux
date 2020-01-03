import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from "./store/reducer";

import { Provider } from "react-redux";
import { createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";
import { watchUpButton } from "./redux-saga/saga";
import rootSaga from "./redux-saga/root-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga); //this will run the saga

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
