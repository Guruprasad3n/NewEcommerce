import React from "react";
import Layout from "../../Components/Layout/Layout";
import AdminMenu from "../../Components/Layout/AdminMenu";
function Products() {
  return (
    <>
      <Layout title={"Products Dashboard - Guru's Commerce"}>
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-3">
            <div className="tect-center">
                <h1>Products List</h1>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Products;
