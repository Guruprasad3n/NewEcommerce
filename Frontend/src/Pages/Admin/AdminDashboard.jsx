import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import AdminMenu from "../../Components/Layout/AdminMenu";
import { useAuth } from "../../Context/auth";

function AdminDashboard() {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Layout title={"Dashboard - Admin "}>
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9">
              <div className="card w-75 p-3">
                <h3>Admin Name : {auth?.user?.name}</h3>
                <h3>Admin Email : {auth?.user?.email}</h3>
                <h3>Admin Contact : {auth?.user?.phone}</h3>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default AdminDashboard;
