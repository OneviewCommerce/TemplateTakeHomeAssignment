import { NavLink } from "react-router-dom";
import Style from "./nav.module.scss";

export const Nav = () => {
  return (
    <header className={Style.nav}>
      <NavLink className={Style.link} to="/">
        Home
      </NavLink>
      <NavLink className={Style.link} to="/users">
        User Table
      </NavLink>
    </header>
  );
};
