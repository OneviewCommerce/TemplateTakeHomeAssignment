import { renderWithRedux, testUsers } from "./helper";
import { Users } from "../view/users";

describe("Users view", () => {
  const initialState = {
    usersReducer: {
      isUsersLoading: false,
      usersError: null,
    },
  };

  it("renders with no error", () => {
    renderWithRedux(<Users />, { initialState: initialState });
  });

  it("renders Users view  in snapshot", () => {
    let wrapper = renderWithRedux(<Users />, {
      initialState,
    });
    expect(wrapper).toMatchSnapshot();
  });
});
