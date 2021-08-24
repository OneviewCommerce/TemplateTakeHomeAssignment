import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { postsError, setPosts, isPostsLoading, clearPostsError } from "../actions/posts";
import settings from "../../settings";
import axios from "axios";

export const fetchPosts = (userId?: number | null) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(isPostsLoading(true));
    const url = userId ? `/posts?userId=${userId}` : "/posts";
    await axios
      .get(settings.apiRoot + url)
      .then((resp) => {
        dispatch(isPostsLoading(false));
        dispatch(setPosts(resp.data));
        dispatch(clearPostsError());
      })
      .catch((err) => {
        dispatch(isPostsLoading(false));
        dispatch(postsError(err.message));
      });
  };
};
