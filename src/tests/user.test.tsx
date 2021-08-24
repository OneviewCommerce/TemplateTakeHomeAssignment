import { renderWithRedux } from "./helper";
import { User } from "../view/user";

describe("User view", () => {
  const initialState = {
    usersReducer: {
      isUsersLoading: false,
      usersError: null,
    },
    postsReducer: {
      isPostsLoading: false,
      postsError: null,
    },
  };

  const params = {
    id: 1,
  };

  it("renders with no error", () => {
    renderWithRedux(<User match={{ params }} />, { initialState: initialState });
  });

  it("renders Users view  in snapshot", () => {
    let wrapper = renderWithRedux(<User match={{ params }} />, {
      initialState,
    });
    expect(wrapper).toMatchSnapshot();
  });
});
