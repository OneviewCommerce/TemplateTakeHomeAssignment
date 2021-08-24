import moxios from "moxios";
import configureStore from "redux-mock-store";
import reduxThunk from "redux-thunk";
import * as actionTypes from "../types";
import { fetchPosts } from "../redux/thunks/fetchPosts";
import * as postsActions from "../redux/actions/posts";
import { testPosts } from "./helper";

const mockStore = configureStore([reduxThunk]);
const store = mockStore({});

describe("fetchPosts() thunk", () => {
  describe("Successful fetchPosts() thunk", () => {
    const mockSuccess = (data) => ({ status: 200, response: data });

    const expectedResult = [
      postsActions.isPostsLoading(true),
      postsActions.isPostsLoading(false),
      postsActions.setPosts(testPosts),
      postsActions.clearPostsError(),
    ];

    beforeEach(() => {
      store.clearActions();
      moxios.install();
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith(mockSuccess(testPosts));
      });
    });

    afterEach(() => moxios.uninstall());

    it(`should dispatch ${actionTypes.IS_POSTS_LOADING} to true`, () => {
      return store.dispatch(fetchPosts()).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual(expectedResult[0]);
      });
    });

    it(`should dispatch ${actionTypes.IS_POSTS_LOADING} to false`, () => {
      return store.dispatch(fetchPosts()).then(() => {
        const actions = store.getActions();

        expect(actions[1]).toEqual(expectedResult[1]);
      });
    });

    it(`should dispatch ${actionTypes.SET_POSTS} with data`, () => {
      return store.dispatch(fetchPosts()).then(() => {
        const actions = store.getActions();

        expect(actions[3]).toEqual(expectedResult[3]);
      });
    });

    it(`should dispatch ${actionTypes.CLEAR_POSTS_ERROR}`, () => {
      return store.dispatch(fetchPosts()).then(() => {
        const actions = store.getActions();

        expect(actions[4]).toEqual(expectedResult[4]);
      });
    });

    it("should dispatch ALL posts actions", () => {
      return store.dispatch(fetchPosts()).then(() => {
        const actions = store.getActions();

        expect(actions).toEqual(expectedResult);
      });
    });
  });

  describe("Error fetchPosts() thunk", () => {
    const mockError = (error) => ({ status: 500, response: error });

    const expectedResult = [
      postsActions.isPostsLoading(true),
      postsActions.isPostsLoading(false),
      postsActions.postsError("Request failed with status code 500"),
    ];

    beforeEach(() => {
      store.clearActions();
      moxios.install(),
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith(mockError("Request failed with status code 500"));
        });
    });

    afterEach(() => moxios.uninstall());

    it(`should dispatch ${actionTypes.IS_POSTS_LOADING} to true`, () => {
      return store.dispatch(fetchPosts()).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual(expectedResult[0]);
      });
    });

    it(`should dispatch ${actionTypes.IS_POSTS_LOADING} to false`, () => {
      return store.dispatch(fetchPosts()).then(() => {
        const actions = store.getActions();

        expect(actions[1]).toEqual(expectedResult[1]);
      });
    });

    it(`should dispatch ${actionTypes.POSTS_ERROR} with message`, () => {
      return store.dispatch(fetchPosts()).then(() => {
        const actions = store.getActions();

        expect(actions[2]).toEqual(expectedResult[2]);
      });
    });
  });
});
