import React from "react";
import Layout from "../Components/Layout/Layout";
function About() {
  return (
    <>
      <Layout title={"About us - Guru's Commerce"} >
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://www.pngmart.com/files/About-Us-PNG-Photos.png"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
      </Layout>
    </>
  );
}
export default About;
