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
