import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import PlaceList from "../components/PlaceList";

export const UserPlaces = (props) => {
  const [places, setPlaces] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const userId = props.match.params.userId;
  useEffect(() => {
    const fetchUserPlaces = async () => {
      const res = await sendRequest(`/api/places/user/${userId}`, "get");
      setPlaces(res);
    };
    fetchUserPlaces();
  }, []);
  const onDelete = (deletedPlace) => {
    setPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place._id !== deletedPlace)
    );
  };
  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />

      {isLoading && (
        <div className='center'>
          <LoadingSpinner />{" "}
        </div>
      )}
      {!isLoading && places && <PlaceList items={places} onDelete={onDelete} />}
    </Fragment>
  );
};

export default UserPlaces;
