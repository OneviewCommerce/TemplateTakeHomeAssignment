import * as userActions from "../redux/actions/users";
import * as postsActions from "../redux/actions/posts";
import * as types from "../types";
import * as helper from "./helper";

describe("Users Actions", () => {
  it(`should create ${types.IS_USERS_LOADING}`, () => {
    const expectedAction = {
      type: types.IS_USERS_LOADING,
      payload: true,
    };
    expect(userActions.isUsersLoading(true)).toEqual(expectedAction);
  });

  it(`it should create ${types.USERS_ERROR}`, () => {
    const payload = "Error Here";
    const expectedAction = {
      type: types.USERS_ERROR,
      payload,
    };
    expect(userActions.usersError(payload)).toEqual(expectedAction);
  });

  it(`it should create ${types.CLEAR_USERS_ERROR}`, () => {
    const expectedAction = {
      type: types.CLEAR_USERS_ERROR,
    };
    expect(userActions.clearUsersError()).toEqual(expectedAction);
  });

  it(`it should create ${types.SET_USER}`, () => {
    const expectedAction = {
      type: types.SET_USER,
      payload: helper.testUser,
    };
    expect(userActions.setUser(helper.testUser)).toEqual(expectedAction);
  });

  it(`it should create ${types.SET_USERS}`, () => {
    const expectedAction = {
      type: types.SET_USERS,
      payload: helper.testUsers,
    };
    expect(userActions.setUsers(helper.testUsers)).toEqual(expectedAction);
  });
});

describe("Posts Actions", () => {
  it(`should create ${types.IS_POSTS_LOADING}`, () => {
    const expectedAction = {
      type: types.IS_POSTS_LOADING,
      payload: true,
    };
    expect(postsActions.isPostsLoading(true)).toEqual(expectedAction);
  });

  it(`it should create ${types.POSTS_ERROR}`, () => {
    const payload = "Error Here";
    const expectedAction = {
      type: types.POSTS_ERROR,
      payload,
    };
    expect(postsActions.postsError(payload)).toEqual(expectedAction);
  });

  it(`it should create ${types.CLEAR_POSTS_ERROR}`, () => {
    const expectedAction = {
      type: types.CLEAR_POSTS_ERROR,
    };
    expect(postsActions.clearPostsError()).toEqual(expectedAction);
  });

  it(`it should create ${types.SET_POSTS}`, () => {
    const expectedAction = {
      type: types.SET_POSTS,
      payload: helper.testPosts,
    };
    expect(postsActions.setPosts(helper.testPosts)).toEqual(expectedAction);
  });
});
