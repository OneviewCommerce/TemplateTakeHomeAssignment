import { Route, Switch } from "react-router-dom";
import { Nav } from "../lib";
import Routes from "../../routes";
import Style from "./app.module.scss";

export const App = (): JSX.Element => {
  const DisplayRoutes = Routes.map((route) => {
    return <Route key={route.path} exact path={route.path} component={route.view} />;
  });

  return (
    <div className={Style.app}>
      <Nav />
      <Switch>{DisplayRoutes}</Switch>
    </div>
  );
};
