import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import UserMenu from "../../Components/Layout/UserMenu";
import { useAuth } from "../../Context/auth";

function Dashboard() {
  const [auth, setAuth] = useAuth()
  return (
    <>
      <Layout title={"Dashboard - Guru's Commerce"}>
      <div className="container-fluid p-3 m-3">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9">
              <div className="card m-75 p-3">
                <h3>Name: {auth?.user?.name}</h3>
                <h3>Email: {auth?.user?.email}</h3>
                <h3>Address: {auth?.user?.address}</h3>
                <h3>Contact: {auth?.user?.phone}</h3>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Dashboard;
