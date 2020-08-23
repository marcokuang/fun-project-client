import React from "react";
import { connect } from "react-redux";
import FlashCardList from "./flashcard/FlashCardList";

const dummyQs = [
  { id: 1, question: "question 1", answer: "4", options: ["1", "a", "z"] },
  { id: 2, question: "question 2", answer: "zzz", options: ["2", "b", "zcc"] },
];

class MainPage extends React.Component {
  render() {
    if (this.props.user && this.props.user.email) {
      // return <div>Welcome {this.props.user} !</div>;
      return <FlashCardList flashcards={dummyQs} />;
    } else {
      return <div>Main Page is here</div>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.authenticated,
  };
};

export default connect(mapStateToProps)(MainPage);
