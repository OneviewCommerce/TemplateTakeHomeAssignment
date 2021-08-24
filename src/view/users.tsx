import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/thunks/fetchUsers";
import { userStateType } from "../types";

import { Table, Loading, Message } from "../components/lib";

interface rootUsersState {
  usersReducer: userStateType;
}

export const Users = (): React.ReactElement => {
  const { users, isUsersLoading, usersError } = useSelector((state: rootUsersState) => {
    return state.usersReducer;
  });
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onRowClick = (userId: any) => {
    history.push(`/users/${userId}`);
  };

  return (
    <>
      <h1>Users page</h1>
      {isUsersLoading ? (
        <Loading />
      ) : usersError ? (
        <Message message={`Developer broke something ${usersError}`} />
      ) : (
        <Table
          tableData={users}
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
          onRowClick={onRowClick}
        />
      )}
    </>
  );
};
