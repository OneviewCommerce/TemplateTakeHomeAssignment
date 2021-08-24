import { usersReducer } from "./users";
import { postsReducer } from "./posts";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  usersReducer,
  postsReducer,
});

export default allReducers;
