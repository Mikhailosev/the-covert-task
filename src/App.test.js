import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import usersReducer from "./store/reducers/usersReducer";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const rootReducer = combineReducers({
  users: usersReducer,
});
const logger = store => {
  return next => {
    return action => {
      console.log("[Middleware] Dispatching", action);

      const result = next(action);

      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
