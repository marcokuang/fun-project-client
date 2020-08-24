import actions from "redux-form/lib/actions";

export default (
  state = { cards: [], categories: [], selectedCategory: "", number: 5 },
  action
) => {
  switch (action.type) {
    case "UPDATE_FLASHCARDS":
      return { ...state, cards: [...action.payload] };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "UPDATE_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "UPDATE_NUMBER":
      return { ...state, number: action.payload };
    default:
      return state;
  }
};
