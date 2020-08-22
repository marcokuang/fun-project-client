import axios from "axios";

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

    dispatch({
      type: "SIGN_IN",
      payload: { email: props.email, token: result.data.token },
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
    dispatch({
      type: "SIGN_UP",
      payload: { email: props.email, token: result.data.token },
    });
  } catch (err) {
    console.log("An error has occurred during sign up process", err);
  }
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
