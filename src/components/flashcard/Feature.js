import React, { useEffect, useRef } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import FlashCardList from "./FlashCardList";
import CategoryForm from "./CategoryForm";
import * as actions from "../../action";
import "../../assets/style/list.css";

export default function Feature() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getFlashCards());
  }, [dispatch]);

  useEffect(() => {
    dispatch(actions.getQuestionCategories());
  }, [dispatch]);

  // copy from semantic UI example to get a context ref for the currect component
  let contextRef = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    //invoke the action creator immediately
    dispatch(actions.getFlashCards());
  };

  return (
    <div ref={contextRef} className="sticky-bar">
      <CategoryForm handleSubmit={handleSubmit} contextRef={contextRef} />
      <FlashCardList />
    </div>
  );
}
