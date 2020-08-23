import axios from "axios";

function setLocalStorage({ email, token }) {
  localStorage.setItem("email", email);
  localStorage.setItem("token", token);
}

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
