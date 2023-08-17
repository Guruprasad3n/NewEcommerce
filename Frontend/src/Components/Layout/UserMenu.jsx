import { NavLink } from "react-router-dom";
import React from "react";
function UserMenu() {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          {/* <NavLink
          to="#"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          The current link item
        </NavLink> */}
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
          {/* <NavLink
            to="/dashboard/user/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink> */}
          {/* <NavLink
          className="list-group-item list-group-item-action disabled"
          aria-disabled="true"
        >
          A disabled link item
        </NavLink> */}
        </div>
      </div>
    </>
  );
}

export default UserMenu