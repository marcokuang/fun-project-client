import actions from "redux-form/lib/actions";

const INIT_STATE = {
  authenticated: "",
  errorMessage: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, authenticated: action.payload };
    case "SIGN_OUT":
      return { ...state, authenticated: "" };
    case "SIGN_UP":
      return { ...state, authenticated: action.payload };
    default:
      return state;
  }
};
