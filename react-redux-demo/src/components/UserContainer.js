import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/users/usersActions";

const UserContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  console.log({ users });

  return (
    <div>
      <h2>Users</h2>
      {users &&
        users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
    </div>
  );
};

export default UserContainer;
