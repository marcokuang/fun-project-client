import React, { useEffect, useState, useRef } from "react";
import { useSelector, shallowEqual } from "react-redux";
import axios from "axios";
import FlashCardList from "./flashcard/FlashCardList";
import CategoryForm from "./flashcard/CategoryForm";
import "../assets/style/list.css";

const dummyQs = [
  { id: 1, question: "question 1", answer: "4", options: ["1", "a", "z"] },
  { id: 2, question: "question 2", answer: "zzz", options: ["2", "b", "zcc"] },
];

export default function MainPage() {
  const [flashcards, setFlashcards] = useState(dummyQs);
  const [categories, setCategories] = useState([]);
  let state = useSelector((state) => state.auth.authenticated, shallowEqual);

  // get category
  useEffect(() => {
    axios.get("https://opentdb.com/api_category.php").then((res) => {
      console.log(res.data);
      let categories = res.data.trivia_categories;
      setCategories(
        categories.map(({ name, id }) => ({
          text: name,
          value: id,
          key: id,
        }))
      );
    });
  }, []);
  // let getData = ();
  let formatResults = (results) =>
    results.map((card, index) => {
      return {
        id: index,
        question: card.question,
        answer: card.correct_answer,
        options: [card.correct_answer, ...card.incorrect_answers].sort(
          () => Math.random() - 0.5
        ),
      };
    });

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=5").then((res) => {
      let cards = formatResults(res.data.results);
      console.log(cards);
      setFlashcards(cards);
    });
  }, []);
  console.log("hook", state);

  let contextRef = useRef();

  const [category, setCategory] = useState("");
  const [number, setNumber] = useState(3);

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(category, number);
    // getData("https://opentdb.com/api.php?amount=5");
    axios
      .get("https://opentdb.com/api.php?", {
        params: {
          amount: number,
          category: category,
        },
      })
      .then((res) => {
        let cards = formatResults(res.data.results);
        console.log(cards);
        setFlashcards(cards);
      });
  };

  if (state && state.email) {
    // return <div>Welcome {this.props.user} !</div>;

    return (
      <div ref={contextRef} className="sticky-bar">
        <CategoryForm
          categories={categories}
          category={category}
          number={number}
          setCategory={setCategory}
          setNumber={setNumber}
          handleSubmit={handleSubmit}
          contextRef={contextRef}
        />
        <FlashCardList flashcards={flashcards} />
      </div>
    );
  } else {
    return <div>Main Page is here</div>;
  }
}
