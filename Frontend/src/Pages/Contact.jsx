import React from "react";
import Layout from "../Components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

function Contact() {
  return (
    <>
      <Layout title={"Contact Us - Guru's Commerce"} >
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg"
              alt="contactus"
              style={{ width: "80%" }}
            />
          </div>
          <div className="col-md-4">
            <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
            <p className="text-justify mt-2">
              any query and info about prodduct feel free to call anytime we
              24X7 vaialible
            </p>
            <p className="mt-3 d-flex align-items-center ">
              <BiMailSend /> : www.help@ecommerceapp.com
            </p>
            <p className="mt-3 d-flex align-items-center ">
              <BiPhoneCall /> : 012-3456789
            </p>
            <p className="mt-3 d-flex align-items-center ">
              <BiSupport /> : 1800-0000-0000 (toll free)
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Contact;
