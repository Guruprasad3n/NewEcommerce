import React from "react";
import UserMenu from "../../Components/Layout/UserMenu";
import Layout from "../../Components/Layout/Layout";
function Orders() {
  return (
    <>
      <Layout title={"Your Orders - Guru's Commerce"}>
        <div className="container-fluid p-3 m-3">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9">
              <h1>All Orders</h1>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Orders;
