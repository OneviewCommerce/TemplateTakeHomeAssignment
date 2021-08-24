import { postsActionTypes, postsStateType } from "../../types";

const initialPostsState: postsStateType = {
  posts: [],
  isPostsLoading: false,
  postsError: null,
};

export const postsReducer = (state = initialPostsState, action: postsActionTypes) => {
  switch (action.type) {
    case "IS_POSTS_LOADING":
      return { ...state, isPostsLoading: action.payload || false };
    case "POSTS_ERROR":
      return { ...state, postsError: action.payload };
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "CLEAR_POSTS_ERROR":
      return { ...state, postsError: null };
    default:
      return state;
  }
};
