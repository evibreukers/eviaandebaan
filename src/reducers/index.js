import counterReducer from "./count";
import answerReducer from "./answer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  answer: answerReducer,
});

export default allReducers;
