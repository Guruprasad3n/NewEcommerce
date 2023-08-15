import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
function Layout({ children, title, description, keywords, author }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>

      <Navbar />
      <main style={{ minHeight: "75vh" }}>{children}</main>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "Ecommerce App - Shop Now",
  description: "Mern Stack Project",
  keywords: "Mern, React, Node, MongoDB, HTML, CSS, JavaScript",
  author: "Guru's Commerce, Guru Prasad Behera",
};
export default Layout;
