import React, { Fragment, Suspense } from "react";
import useAuth from "./shared/hooks/auth-hook";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { AuthContext } from "./shared/context/authContext";

import "./App.css";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";
// components //
// import Users from "./users/pages/Users";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
// import NewPlace from "./places/pages/NewPlace";
// import UserPlaces from "./places/pages/UserPlaces";
// import UpdatePlace from "./places/pages/UpdatePlace";
// import Authenticate from "./users/pages/Authenticate";

const Users = React.lazy(() => import("./users/pages/Users"));
const NewPlace = React.lazy(() => import("./places/pages/NewPlace"));
const UserPlaces = React.lazy(() => import("./places/pages/UserPlaces"));
const UpdatePlace = React.lazy(() => import("./places/pages/UpdatePlace"));
const Authenticate = React.lazy(() => import("./users/pages/Authenticate"));

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Fragment>
        <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/places/new' component={NewPlace} />
          <Route exact path='/places/:placeId' component={UpdatePlace} />
          <Route exact path='/:userId/places' component={UserPlaces} />

          <Redirect to='/' />
        </Switch>
      </Fragment>
    );
  } else {
    routes = (
      <Fragment>
        <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/:userId/places' component={UserPlaces} />
          <Route exact path='/auth' component={Authenticate} />

          <Redirect to='/auth'></Redirect>
        </Switch>
      </Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !!token, token, login, logout, userId }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Suspense
            fallback={
              <div className='center'>
                <LoadingSpinner />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
