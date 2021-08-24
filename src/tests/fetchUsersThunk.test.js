import moxios from "moxios";
import configureStore from "redux-mock-store";
import reduxThunk from "redux-thunk";
import * as actionTypes from "../types";
import { fetchUsers } from "../redux/thunks/fetchUsers";
import * as usersActions from "../redux/actions/users";
import { testUsers, testUser } from "./helper";

const mockStore = configureStore([reduxThunk]);
const store = mockStore({});

describe("fetchUsers() thunk", () => {
  describe("Successful fetchUsers() thunk", () => {
    const mockSuccess = (data) => ({ status: 200, response: data });

    const expectedResult = [
      usersActions.isUsersLoading(true),
      usersActions.isUsersLoading(false),
      usersActions.setUsers(testUsers),
      usersActions.clearUsersError(),
    ];

    beforeEach(() => {
      store.clearActions();
      moxios.install();
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith(mockSuccess(testUsers));
      });
    });

    afterEach(() => moxios.uninstall());

    it(`should dispatch ${actionTypes.IS_USERS_LOADING} to true`, () => {
      return store.dispatch(fetchUsers()).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual(expectedResult[0]);
      });
    });

    it(`should dispatch ${actionTypes.IS_USERS_LOADING} to false`, () => {
      return store.dispatch(fetchUsers()).then(() => {
        const actions = store.getActions();

        expect(actions[1]).toEqual(expectedResult[1]);
      });
    });

    it(`should dispatch ${actionTypes.SET_USERS} with data`, () => {
      return store.dispatch(fetchUsers()).then(() => {
        const actions = store.getActions();

        expect(actions[3]).toEqual(expectedResult[3]);
      });
    });

    it(`should dispatch ${actionTypes.CLEAR_USERS_ERROR}`, () => {
      return store.dispatch(fetchUsers()).then(() => {
        const actions = store.getActions();

        expect(actions[4]).toEqual(expectedResult[4]);
      });
    });

    it("should dispatch ALL users actions", () => {
      return store.dispatch(fetchUsers()).then(() => {
        const actions = store.getActions();

        expect(actions).toEqual(expectedResult);
      });
    });
  });

  describe("Error fetchUsers() thunk", () => {
    const mockError = (error) => ({ status: 500, response: error });

    const expectedResult = [
      usersActions.isUsersLoading(true),
      usersActions.isUsersLoading(false),
      usersActions.usersError("Request failed with status code 500"),
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

    it(`should dispatch ${actionTypes.IS_USERS_LOADING} to true`, () => {
      return store.dispatch(fetchUsers()).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual(expectedResult[0]);
      });
    });

    it(`should dispatch ${actionTypes.IS_USERS_LOADING} to false`, () => {
      return store.dispatch(fetchUsers()).then(() => {
        const actions = store.getActions();

        expect(actions[1]).toEqual(expectedResult[1]);
      });
    });

    it(`should dispatch ${actionTypes.USERS_ERROR} with message`, () => {
      return store.dispatch(fetchUsers()).then(() => {
        const actions = store.getActions();

        expect(actions[2]).toEqual(expectedResult[2]);
      });
    });
  });
});

describe("fetchUsers(id) thunk", () => {
  describe("Successful fetchUsers(id) thunk", () => {
    const mockSuccess = (data) => ({ status: 200, response: data });

    const expectedResult = [
      usersActions.isUsersLoading(true),
      usersActions.isUsersLoading(false),
      usersActions.setUser(testUser),
      usersActions.clearUsersError(),
    ];

    beforeEach(() => {
      store.clearActions();
      moxios.install(),
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith(mockSuccess(testUser));
        });
    });

    afterEach(() => moxios.uninstall());

    it(`should dispatch ${actionTypes.IS_USERS_LOADING} to true`, () => {
      return store.dispatch(fetchUsers()).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual(expectedResult[0]);
      });
    });

    it(`should dispatch ${actionTypes.IS_USERS_LOADING} to false`, () => {
      return store.dispatch(fetchUsers()).then(() => {
        const actions = store.getActions();

        expect(actions[1]).toEqual(expectedResult[1]);
      });
    });

    it(`should dispatch ${actionTypes.SET_USER} with data`, () => {
      return store.dispatch(fetchUsers()).then(() => {
        const actions = store.getActions();

        expect(actions[3]).toEqual(expectedResult[3]);
      });
    });

    it(`should dispatch ${actionTypes.CLEAR_USERS_ERROR}`, () => {
      return store.dispatch(fetchUsers()).then(() => {
        const actions = store.getActions();

        expect(actions[4]).toEqual(expectedResult[4]);
      });
    });

    it("should dispatch ALL users actions", () => {
      return store.dispatch(fetchUsers()).then(() => {
        const actions = store.getActions();

        expect(actions).toEqual(expectedResult);
      });
    });
  });

  describe("Error fetchUsers(id) thunk", () => {
    const mockError = (error) => ({ status: 500, response: error });

    const expectedResult = [
      usersActions.isUsersLoading(true),
      usersActions.isUsersLoading(false),
      usersActions.usersError("Request failed with status code 500"),
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

    it(`should dispatch ${actionTypes.IS_USERS_LOADING} to true`, () => {
      return store.dispatch(fetchUsers()).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual(expectedResult[0]);
      });
    });

    it(`should dispatch ${actionTypes.IS_USERS_LOADING} to false`, () => {
      return store.dispatch(fetchUsers()).then(() => {
        const actions = store.getActions();

        expect(actions[1]).toEqual(expectedResult[1]);
      });
    });

    it(`should dispatch ${actionTypes.USERS_ERROR} with message`, () => {
      return store.dispatch(fetchUsers()).then(() => {
        const actions = store.getActions();

        expect(actions[2]).toEqual(expectedResult[2]);
      });
    });
  });
});
