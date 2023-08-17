import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import SpinnerComponent from "../Spinner";
function AdminRoute() {
  const [ok, setOk] = useState();
  const [auth, setAuth] = useAuth(false);

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        "http://localhost:8000/api/v1/auth/admin-auth"
      );
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);
  return ok ? <Outlet /> : <SpinnerComponent path="" />;
}
export default AdminRoute;
