import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "../../redux/reducers";
import ReduxThunk from "redux-thunk";

const initialState = {};

const renderWithRedux = (
  ui: any,
  {
    initialState: any = initialState,
    store = createStore(reducer, initialState, applyMiddleware(ReduxThunk)),
    ...renderOptions
  } = {}
) => {
  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>;
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { renderWithRedux };

export const testUser = {
  id: 1,
  name: "Hire me",
  email: "user@email.com",
  address: {
    street: "street",
    suite: "suite",
    city: "city",
    zipcode: "zipcode",
    geocode: {
      lat: "lat",
      lng: "long",
    },
  },
  phone: "123456",
  website: "website.com",
  company: {
    name: "company",
    catchPhrase: "best dev",
    bs: "bs",
  },
};

export const testUsers = [
  {
    id: 1,
    name: "Hire me",
    email: "user@email.com",
    address: {
      street: "street",
      suite: "suite",
      city: "city",
      zipcode: "zipcode",
      geocode: {
        lat: "lat",
        lng: "long",
      },
    },
    phone: "123456",
    website: "website.com",
    company: {
      name: "company",
      catchPhrase: "best dev",
      bs: "bs",
    },
  },
  {
    id: 2,
    name: "User2",
    email: "user2@email.com",
    address: {
      street: "street2",
      suite: "suite2",
      city: "city2",
      zipcode: "zipcode2",
      geocode: {
        lat: "lat2",
        lng: "long2",
      },
    },
    phone: "654321",
    website: "website2.com",
    company: {
      name: "company2",
      catchPhrase: "best dev2",
      bs: "bs2",
    },
  },
];

export const testPosts = [
  {
    userId: 1,
    id: 1,
    title: "Post title",
    body: "Somebody once told me...",
  },
];
