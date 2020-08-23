import React from "react";

export default function FlashCard({ flashcard }) {
  return (
    <div className="card">
      <div>{flashcard.question}</div>
      <div>{flashcard.answer}</div>
    </div>
  );
}
