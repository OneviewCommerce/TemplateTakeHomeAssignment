import { userType, usersType, IS_USERS_LOADING } from "../../types";

export const isUsersLoading = (bool: boolean) => {
  return {
    type: IS_USERS_LOADING,
    payload: bool,
  };
};

export const usersError = (message: string) => {
  return {
    type: "USERS_ERROR",
    payload: message,
  };
};

export const setUsers = (users: usersType) => {
  return {
    type: "SET_USERS",
    payload: users,
  };
};

export const setUser = (user: userType) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const clearUsersError = () => {
  return {
    type: "CLEAR_USERS_ERROR",
  };
};
