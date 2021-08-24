import { renderWithRedux } from "./helper";
import { Home } from "../view/home";

describe('Home view', () => {
    it("renders with no error", () => {
        renderWithRedux(<Home />);
      });
      
})
