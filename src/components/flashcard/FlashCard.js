import React, { useState, useRef, useEffect } from "react";
import { Card, Label, List, Ref } from "semantic-ui-react";
import "../../assets/style/card.css";

function decodeString(text) {
  let textEle = document.createElement("div");
  textEle.innerHTML = text;
  return textEle.innerText;
}

export default function FlashCard({ flashcard }) {
  const { id, answer, options, question } = flashcard;
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");
  const frontEl = useRef();
  const backEl = useRef();

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    const maxHeight = Math.max(frontHeight, backHeight, 100);
    // console.log(maxHeight);
    setHeight(maxHeight);
  }

  useEffect(setMaxHeight, [question, answer, options]);
  useEffect(() => {
    setFlip(false);
  }, [question]);

  return (
    <Card
      style={{ height: height }}
      className={`my-card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <Ref innerRef={frontEl}>
        <Card.Content className="front">
          <Card.Header>{decodeString(question)}</Card.Header>
          <List className="flashcard-options">
            {options.map((option) => {
              return (
                <List.Item key={id + option + Date.now()}>
                  <Label className="flashcard-option">
                    {decodeString(option)}
                  </Label>
                </List.Item>
              );
            })}
          </List>
        </Card.Content>
      </Ref>

      <Ref innerRef={backEl}>
        <Card.Content className="back" myref={backEl}>
          <Card.Header>{answer}</Card.Header>{" "}
        </Card.Content>
      </Ref>
    </Card>
  );
}
