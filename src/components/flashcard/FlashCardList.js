import React from "react";
import { Card, Segment } from "semantic-ui-react";
import FlashCard from "./FlashCard";

export default function FlashCardList({ flashcards }) {
  // console.log(flashcards);

  return (
    <Card.Group as={Segment} attached="bottom" className="card-grid">
      {flashcards.map((flashcard) => {
        return <FlashCard flashcard={flashcard} key={flashcard.id} />;
      })}
    </Card.Group>
  );
}
