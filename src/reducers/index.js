import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth";
import flashcardReducer from "./flashcard";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  flashcard: flashcardReducer,
});
