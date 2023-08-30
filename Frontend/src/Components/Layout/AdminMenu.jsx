import { NavLink } from "react-router-dom";
import React from "react";
function AdminMenu() {
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
            to="/dashboard/admin/category"
            className="list-group-item list-group-item-action"
          >
            Create Catigory
          </NavLink>
          <NavLink
            to="/dashboard/admin/createproduct"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink>
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
export default AdminMenu;
