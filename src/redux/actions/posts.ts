import { postsType } from "../../types";

export const isPostsLoading = (bool: boolean) => {
  return {
    type: "IS_POSTS_LOADING",
    payload: bool,
  };
};

export const postsError = (message: string) => {
  return {
    type: "POSTS_ERROR",
    payload: message,
  };
};

export const setPosts = (posts: postsType) => {
  return {
    type: "SET_POSTS",
    payload: posts,
  };
};

export const clearPostsError = () => {
  return {
    type: "CLEAR_POSTS_ERROR",
  };
};
