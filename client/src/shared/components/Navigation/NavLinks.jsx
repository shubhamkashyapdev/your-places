import React, { Fragment, useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { AuthContext } from "../../../shared/context/authContext";

import "../../../css/shared/Navigation/NavLinks.css";
const NavLinks = ({ match }) => {
  const authContext = useContext(AuthContext);
  const { isLoggedIn, login, logout, userId } = authContext;
  return (
    <ul className='nav-links'>
      <li>
        <NavLink exact to='/'>
          {" "}
          All Users{" "}
        </NavLink>
      </li>
      {isLoggedIn && (
        <Fragment>
          <li>
            <NavLink to={`/${userId}/places`}> My Places </NavLink>
          </li>
          <li>
            <NavLink to='/places/new'> Add Place </NavLink>
          </li>

          <li>
            <NavLink to='/auth' onClick={logout}>
              {" "}
              Logout{" "}
            </NavLink>
          </li>
        </Fragment>
      )}

      {!isLoggedIn && (
        <li>
          <NavLink to='/auth'> Auth </NavLink>
        </li>
      )}
    </ul>
  );
};

export default withRouter(NavLinks);
