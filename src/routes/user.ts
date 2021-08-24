import { Users } from "../view/users";
import { User } from "../view/user";
import { routeType } from "../types";

const UserTable: routeType[] = [
  {
    path: "/users",
    view: Users,
  },
  {
    path: "/users/:id",
    view: User,
  },
];

export default UserTable;
