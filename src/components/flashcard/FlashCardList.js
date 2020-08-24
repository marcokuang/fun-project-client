import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Card, Segment } from "semantic-ui-react";
import FlashCard from "./FlashCard";

export default function FlashCardList() {
  // console.log(flashcards);
  const flashcards = useSelector(
    (state) => state.flashcard.cards,
    shallowEqual
  );
  return (
    <Card.Group as={Segment} attached="bottom" className="card-grid">
      {flashcards.map((flashcard) => {
        return <FlashCard flashcard={flashcard} key={flashcard.id} />;
      })}
    </Card.Group>
  );
}
