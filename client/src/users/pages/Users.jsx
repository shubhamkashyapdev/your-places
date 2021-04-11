import React, { Fragment, useEffect, useState } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "../../css/users/pages/Users.css";

// components //
import UserList from "../components/UserList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const Users = (props) => {
  const [userData, setUserData] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await sendRequest(`/api/users`, "get");
        setUserData(res);
      } catch (err) {
        console.error(err || `failed to fetch the users from database.`);
      }
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div>
        {isLoading && (
          <div className='center'>
            <LoadingSpinner />{" "}
          </div>
        )}
        {userData && !isLoading && <UserList users={userData} />}
      </div>
    </Fragment>
  );
};

Users.propTypes = {};

export default Users;
