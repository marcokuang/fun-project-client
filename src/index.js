import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import reducers from "./reducers";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import MainPage from "./components/MainPage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={MainPage} />

        <Route path="/signin" component={SignIn} />

        <Route path="/signout" component={SignOut} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
