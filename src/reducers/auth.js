import actions from "redux-form/lib/actions";

//load previous token from local storage.
function getLocalStorage() {
  let email = localStorage.getItem("email");
  let token = localStorage.getItem("token");

  return {
    email,
    token,
  };
}

const INIT_STATE = {
  authenticated: getLocalStorage(),
  errorMessage: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, authenticated: action.payload };
    case "SIGN_OUT":
      return { ...state, authenticated: null };
    case "SIGN_UP":
      return { ...state, authenticated: action.payload };
    default:
      return state;
  }
};
