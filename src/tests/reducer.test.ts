import { usersReducer } from "../redux/reducers/users";
import * as types from "../types";
import { testUser, testUsers, testPosts } from "./helper";
import { postsReducer } from "../redux/reducers/posts";

describe("Users reducer", () => {
  const initialUsersState: types.userStateType = {
    users: [],
    user: undefined,
    isUsersLoading: false,
    usersError: null,
  };

  it(`it should handle ${types.IS_USERS_LOADING}`, () => {
    expect(usersReducer(initialUsersState, { type: types.IS_USERS_LOADING, payload: true })).toEqual({
      users: [],
      user: undefined,
      isUsersLoading: true,
      usersError: null,
    });
  });

  it(`it should handle ${types.USERS_ERROR}`, () => {
    expect(usersReducer(initialUsersState, { type: types.USERS_ERROR, payload: "Error here" })).toEqual({
      users: [],
      user: undefined,
      isUsersLoading: false,
      usersError: "Error here",
    });
  });

  it(`it should handle ${types.CLEAR_USERS_ERROR}`, () => {
    const initialStateWithError: types.userStateType = {
      users: [],
      user: undefined,
      isUsersLoading: false,
      usersError: "Some error to delete",
    };
    expect(usersReducer(initialStateWithError, { type: types.CLEAR_USERS_ERROR })).toEqual({
      users: [],
      user: undefined,
      isUsersLoading: false,
      usersError: null,
    });
  });

  it(`it should handle ${types.SET_USER}`, () => {
    expect(usersReducer(initialUsersState, { type: types.SET_USER, payload: testUser })).toEqual({
      users: [],
      user: testUser,
      isUsersLoading: false,
      usersError: null,
    });
  });

  it(`it should handle ${types.SET_USERS}`, () => {
    expect(usersReducer(initialUsersState, { type: types.SET_USERS, payload: testUsers })).toEqual({
      users: testUsers,
      user: undefined,
      isUsersLoading: false,
      usersError: null,
    });
  });
});

describe("Posts reducer", () => {
  const initialPostsState: types.postsStateType = {
    posts: [],
    isPostsLoading: false,
    postsError: null,
  };

  it(`it should handle ${types.IS_POSTS_LOADING}`, () => {
    expect(postsReducer(initialPostsState, { type: types.IS_POSTS_LOADING, payload: true })).toEqual({
      posts: [],
      isPostsLoading: true,
      postsError: null,
    });
  });

  it(`it should handle ${types.POSTS_ERROR}`, () => {
    expect(postsReducer(initialPostsState, { type: types.POSTS_ERROR, payload: "Error here" })).toEqual({
      posts: [],
      isPostsLoading: false,
      postsError: "Error here",
    });
  });

  it(`it should handle ${types.CLEAR_USERS_ERROR}`, () => {
    const initialStateWithError: types.postsStateType = {
      posts: [],
      isPostsLoading: false,
      postsError: "Some error here",
    };
    expect(postsReducer(initialStateWithError, { type: types.CLEAR_POSTS_ERROR })).toEqual({
      posts: [],
      isPostsLoading: false,
      postsError: null,
    });
  });

  it(`it should handle ${types.SET_POSTS}`, () => {
    expect(postsReducer(initialPostsState, { type: types.SET_POSTS, payload: testPosts })).toEqual({
      posts: testPosts,
      isPostsLoading: false,
      postsError: null,
    });
  });
});
