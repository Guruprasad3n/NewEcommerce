
import React from "react"
import Layout from "../../Components/Layout/Layout"
import UserMenu from "../../Components/Layout/UserMenu"
function Profile(){
    return(
        <>
<Layout title={"Your Profile - Guru's Commerce"}>
        <div className="container-fluid p-3 m-3">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9 ">
              <h1>Profile User</h1>
            </div>
          </div>
        </div>
      </Layout>

        </>
    )
}
export default Profile