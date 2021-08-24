import { renderWithRedux } from "./helper";
import { shallow } from "enzyme";
import { testUsers } from "./helper";
import { Table } from "../components/lib";

describe("Table Component", () => {
  it("renders with no errors", () => {
    let wrapper = shallow(<Table />);
    expect(wrapper.length).toBe(1);
  });

  it("renders a table with data in snapshot", () => {
    let wrapper = renderWithRedux(
      <Table
        tableData={testUsers}
        tableColumns={[
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "City",
            accessor: "address.city",
          },
          {
            Header: "Company",
            accessor: "company.name",
          },
        ]}
      />,
      { initialState: {} }
    );
    expect(wrapper).toMatchSnapshot();
  });
});
