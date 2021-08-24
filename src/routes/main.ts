import { Home } from "../view/home";
import { NotFound } from "../view/error";
import { routeType } from "../types";

const Main: routeType[] = [
  {
    path: "/",
    view: Home,
  },
  {
    path: "/*",
    view: NotFound,
  },
];

export default Main;
