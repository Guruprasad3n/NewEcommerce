import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Layout({children}){
    return(
        <>
        <Navbar/>
        <main>
            asdja
        {children}
        </main>
        <Footer/>
        {/* <h1>Layout</h1> */}
        </>
    )
}
export default Layout