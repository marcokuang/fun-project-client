import React, { useEffect, useState, useRef } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import FlashCardList from "./flashcard/FlashCardList";
import CategoryForm from "./flashcard/CategoryForm";
import * as actions from "../action";
import "../assets/style/list.css";

export default function MainPage() {
  // retrieve the state from the redux store
  let authState = useSelector(
    (state) => state.auth.authenticated,
    shallowEqual
  );

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getFlashCards());
  }, []);

  useEffect(() => {
    dispatch(actions.getQuestionCategories());
  }, []);

  // copy from semantic UI example to get a context ref for the currect component
  let contextRef = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    //invoke the action creator immediately
    dispatch(actions.getFlashCards());
  };

  if (authState && authState.email) {
    return (
      <div ref={contextRef} className="sticky-bar">
        <CategoryForm handleSubmit={handleSubmit} contextRef={contextRef} />
        <FlashCardList />
      </div>
    );
  } else {
    return <div>Main Page is here</div>;
  }
}
