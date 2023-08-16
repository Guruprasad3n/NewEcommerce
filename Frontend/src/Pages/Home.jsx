import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import { useAuth } from "../Context/auth";
function Home() {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Layout title={"Best Offers - Guru's Commerce"}>
        <h1>Home</h1>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </Layout>
    </>
  );
}
export default Home;
