import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Feature from "./flashcard/Feature";
import "../assets/style/list.css";

export default function MainPage() {
  // retrieve the state from the redux store
  let authState = useSelector(
    (state) => state.auth.authenticated,
    shallowEqual
  );

  if (authState && authState.email) {
    return <Feature />;
  } else {
    return <div>Main Page is here</div>;
  }
}
