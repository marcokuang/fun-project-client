import React, { useEffect, useState, useRef } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import FlashCardList from "./flashcard/FlashCardList";
import CategoryForm from "./flashcard/CategoryForm";
import * as actions from "../action";
import "../assets/style/list.css";

export default function MainPage() {
  let authState = useSelector(
    (state) => state.auth.authenticated,
    shallowEqual
  );
  let flashcardState = useSelector((state) => state.flashcard, shallowEqual);
  let dispatch = useDispatch();

  useEffect(
    actions.getFlashCards(
      dispatch,
      flashcardState.number,
      flashcardState.selectedCategory
    ),
    []
  );

  useEffect(actions.getQuestionCategories(dispatch), []);
  // console.log("hook", flashcardState);

  let contextRef = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    //invoke the action creator immediately
    actions.getFlashCards(
      dispatch,
      flashcardState.number,
      flashcardState.selectedCategory
    )();
  };

  if (authState && authState.email) {
    return (
      <div ref={contextRef} className="sticky-bar">
        <CategoryForm handleSubmit={handleSubmit} contextRef={contextRef} />
        <FlashCardList flashcards={flashcardState.cards} />
      </div>
    );
  } else {
    return <div>Main Page is here</div>;
  }
}
