import React from "react";

// COMPONENTS //
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

import "../../css/users/components/UserList.css";

const UserList = ({ users }) => {
  return users.length === 0 ? (
    <div>
      <Card>
        <h2 style={{ textAlign: "center" }}> No User Found!! </h2>
      </Card>
    </div>
  ) : (
    <ul className='users-list'>
      {users.map((item) => (
        <UserItem item={item} key={item._id} />
      ))}
    </ul>
  );
};

UserList.propTypes = {};

export default UserList;
