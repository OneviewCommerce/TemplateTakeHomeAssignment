import { NavLink } from "react-router-dom";
import { Message } from "../components/lib";

export const NotFound = () => {
  return (
    <div>
      <Message message={"OOPS! Wrong Page"} />
      <NavLink to="/">Return Home</NavLink>
    </div>
  );
};
