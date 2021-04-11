import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "../../css/users/components/UserItem.css";

// component //
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

const UserItem = ({ item: { _id, name, image, places } }) => {
  return (
    <Fragment>
      <li className='user-item'>
        <Card className='user-item__content'>
          <Link to={`/${_id}/places`}>
            <div className='user-item__image'>
              <Avatar image={`/${image}`} alt={name} />
            </div>

            <div className='user-item__info'>
              <h2>{name}</h2>
              <h3>
                {places.length} {places.length === 1 ? "Place" : "Places"}
              </h3>
            </div>
          </Link>
        </Card>
      </li>
    </Fragment>
  );
};

UserItem.propTypes = {};

export default UserItem;
