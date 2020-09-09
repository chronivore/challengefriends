import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Route, Link, Switch } from "react-router-dom";
import Restaurant from "./Restaurant";
import Location from "./Location";
import Home from "./Home";
import Weather from "./Weather"
const Navbar = (props) => {
  return (
    <div>
      <div>
        <Nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="#">NASA</NavLink>
          <NavLink href="/weather">Weather</NavLink>
          <NavLink href="/restaurant">Restaurant</NavLink>
        </Nav>
      </div>
      <div>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/weather"><Weather /></Route>
          <Route exact path="/restaurant">
            {!props.isLocationLoaded ? ("") : (
              <Restaurant
                latitude={props.latitude}
                longitude={props.longitude}
              />
            )}
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default Navbar;





