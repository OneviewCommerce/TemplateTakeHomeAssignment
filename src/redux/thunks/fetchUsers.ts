import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { setUser, setUsers, isUsersLoading, usersError, clearUsersError } from "../actions/users";
import settings from "../../settings";
import axios from "axios";

export const fetchUsers = (userId?: number | null) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(isUsersLoading(true));
    const url = userId ? `/users/${userId}` : "/users";
    await axios
      .get(settings.apiRoot + url)
      .then((resp) => {
        let data: [] = resp.data;
        dispatch(isUsersLoading(false));
        if (!Array.isArray(data)) {
          dispatch(setUser(data));
        } else {
          dispatch(setUsers(data));
        }
        dispatch(clearUsersError());
      })
      .catch((err) => {
        dispatch(isUsersLoading(false));
        dispatch(usersError(err.message));
      });
  };
};
