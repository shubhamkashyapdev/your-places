import React from "react";
import { withRouter } from "react-router-dom";

// components //
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";

import "../../css/places/components/PlaceList.css";

const PlaceList = ({ items, onDelete, match }) => {
  const userPlaces = items.filter(
    (place) => place.creator === match.params.userId
  );
  return userPlaces.length === 0 ? (
    <div className='place-list center'>
      <Card>
        <h2>No Places Found. Create One!!</h2>
        <Button to='/places/new' type='submit'>
          Share Place
        </Button>
      </Card>
    </div>
  ) : (
    <ul className='place-list'>
      {userPlaces.map((place) => (
        <PlaceItem key={place._id} item={place} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default withRouter(PlaceList);
