import { BrowserRouter } from "react-router-dom";
import { App } from "../components/app/app";
import { renderWithRedux } from "./helper";

it("renders with no error", () => {
  renderWithRedux(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
