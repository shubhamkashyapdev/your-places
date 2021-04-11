import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

// conponents //
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

import "../../../css/shared/Navigation/MainNavigation.css";

const MainNavigation = () => {
  const [drawerState, toggleDrawerState] = useState(false);

  const showDrawer = (e) => {
    toggleDrawerState(true);
  };
  const hideDrawer = (e) => {
    toggleDrawerState(false);
  };
  return (
    <Fragment>
      {drawerState && <Backdrop onClick={hideDrawer} />}
      <SideDrawer show={drawerState} onClick={hideDrawer}>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button className='main-navigation__menu-btn' onClick={showDrawer}>
          <span />
          <span />
          <span />
        </button>

        <h1 className='main-navigation__title'>
          <Link to='/'>YourPlaces</Link>
        </h1>

        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;
