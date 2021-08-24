import { usersActionTypes, userStateType } from "../../types";

const initialUsersState: userStateType = {
  users: [],
  user: undefined,
  isUsersLoading: false,
  usersError: null,
};

export const usersReducer = (state = initialUsersState, action: usersActionTypes) => {
  switch (action.type) {
    case "IS_USERS_LOADING":
      return { ...state, isUsersLoading: action.payload };
    case "USERS_ERROR":
      return { ...state, usersError: action.payload };
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "CLEAR_USERS_ERROR":
      return { ...state, usersError: null };

    default:
      return state;
  }
};
