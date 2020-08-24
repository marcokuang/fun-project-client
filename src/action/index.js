import axios from "axios";

function setLocalStorage({ email, token }) {
  localStorage.setItem("email", email);
  localStorage.setItem("token", token);
}

export const getFlashCards = (dispatch, number, category) => () => {
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

  let fetchFlashCards = async () => {
    const res = await axios.get("https://opentdb.com/api.php?", {
      params: {
        amount: number,
        category: category,
      },
    });
    let cards = formatResults(res.data.results);
    console.log(cards);
    dispatch({
      type: "UPDATE_FLASHCARDS",
      payload: cards,
    });
  };
  fetchFlashCards();
};

export const updateCategory = (dispatch) => (category) => {
  dispatch({
    type: "UPDATE_CATEGORY",
    payload: category,
  });
};

export const updateNumOfQuestions = (dispatch) => (number) => {
  dispatch({
    type: "UPDATE_NUMBER",
    payload: number,
  });
};

export const getQuestionCategories = (dispatch) => () => {
  const fetchData = async () => {
    const res = await axios.get("https://opentdb.com/api_category.php");
    let categories = res.data.trivia_categories.map(({ name, id }) => ({
      text: name,
      value: id,
      key: id,
    }));
    dispatch({
      type: "GET_CATEGORIES",
      payload: categories,
    });
    return categories;
  };
  const payload = fetchData();
  console.log("Action creator: ", payload);
};

// "https://opentdb.com/api.php?amount=10"
export const signIn = (props, callback) => async (dispatch) => {
  console.log(props);
  if (typeof callback === "function") {
    callback();
  }

  let result;
  try {
    result = await axios.post("http://localhost:4000/login", props);
    console.log(result);
    const payload = { email: props.email, token: result.data.token };
    setLocalStorage(payload);
    dispatch({
      type: "SIGN_IN",
      payload,
    });
  } catch (err) {
    console.log(err);
  }
};

export const signUp = (props, callback) => async (dispatch) => {
  let result;
  try {
    // console.log( props);
    result = await axios.post("http://localhost:4000/signup", props);
    console.log("SIGN_UP action", result.data);
    const payload = { email: props.email, token: result.data.token };
    setLocalStorage(payload);
    dispatch({
      type: "SIGN_UP",
      payload,
    });
  } catch (err) {
    console.log("An error has occurred during sign up process", err);
  }
};

export const signOut = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("token");

  return {
    type: "SIGN_OUT",
  };
};
