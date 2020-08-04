import { connect } from "react-redux";

export const signIn = (props, callback) => {
  console.log(props);
  if (typeof callback === "function") {
    callback();
  }
  return {
    type: "SIGN_IN",
    payload: props.email,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
