import React from 'react'
import Layout from '../../Components/Layout/Layout'
import AdminMenu from '../../Components/Layout/AdminMenu'
function Product(){
    return(
        <>
        <Layout title={"Dashboard - Create Product"}>
        <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">Prodct</div>
        </div>
        </div>
        </Layout>
        </>
    )
}
export default Product