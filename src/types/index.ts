/*
 *
 * REDUX USER TYPES
 *
 */

import React from "react";

export const IS_USERS_LOADING = "IS_USERS_LOADING";
export const USERS_ERROR = "USERS_ERROR";
export const SET_USERS = "SET_USERS";
export const SET_USER = "SET_USER";
export const CLEAR_USERS_ERROR = "CLEAR_USERS_ERROR";

export type usersActionTypes =
  | { type: typeof IS_USERS_LOADING; payload: boolean }
  | { type: typeof USERS_ERROR; payload: string }
  | { type: typeof SET_USERS; payload: userType[] }
  | { type: typeof SET_USER; payload: userType | {} }
  | { type: typeof CLEAR_USERS_ERROR };

export type userStateType = {
  users?: [userType] | [];
  user?: userType;
  isUsersLoading: boolean;
  usersError: string | null;
};

/*
 *
 * REDUX POSTS TYPES
 *
 */

export const IS_POSTS_LOADING = "IS_POSTS_LOADING";
export const POSTS_ERROR = "POSTS_ERROR";
export const SET_POSTS = "SET_POSTS";
export const CLEAR_POSTS_ERROR = "CLEAR_POSTS_ERROR";

export type postsActionTypes =
  | { type: typeof IS_POSTS_LOADING; payload: boolean }
  | { type: typeof POSTS_ERROR; payload: string }
  | { type: typeof SET_POSTS; payload: postType[] }
  | { type: typeof CLEAR_POSTS_ERROR };

export type postsStateType = {
  posts?: postsType | [];
  isPostsLoading: boolean;
  postsError: string | null;
};

/*
 *
 * CUSTOM TYPES
 *
 */

export type routeType = {
  path: string;
  view: React.FC;
};

export type userType = {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geocode: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type usersType = userType[];

export type postsType = postType[];

export type postType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
