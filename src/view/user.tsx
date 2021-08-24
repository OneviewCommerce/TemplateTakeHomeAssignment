import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/thunks/fetchUsers";
import { fetchPosts } from "../redux/thunks/fetchPosts";
import { userStateType, postsStateType } from "../types";

import { Table, Loading, Message } from "../components/lib";

interface rootUsersState {
  usersReducer: userStateType;
}

interface rootPostState {
  postsReducer: postsStateType;
}

const initialUser = {
  name: "",
};

export const User = (props: any): React.ReactElement => {
  const { isUsersLoading, usersError, user = initialUser } = useSelector((state: rootUsersState) => {
    return state.usersReducer;
  });
  const { posts, isPostsLoading, postsError } = useSelector((state: rootPostState) => state.postsReducer);
  const dispatch = useDispatch();
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(fetchUsers(id));
    dispatch(fetchPosts(id));
  }, [dispatch, id]);

  return (
    <>
      {isPostsLoading || isUsersLoading ? (
        <Loading />
      ) : postsError || usersError ? (
        <Message message={`Developer broke something ${postsError || usersError}`} />
      ) : (
        <>
          <h1>{user.name} Posts : </h1>
          <Table
            tableData={posts}
            tableColumns={[
              {
                Header: "Title",
                accessor: "title",
                disableFilters: true,
              },
              {
                Header: "Body",
                accessor: "body",
                disableFilters: true,
              },
            ]}
          />
        </>
      )}
    </>
  );
};
