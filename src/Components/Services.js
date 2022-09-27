import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ServicesArray } from "../Data";
function Services() {
  return (
    <Container className="pt-5 pb-5">
      <div className="d-flex justify-content-center align-items-center Gap pb-5">
        <p className="PrimaryColor HeadingOurServices">Our</p>
        <p className="HeadingOurServices">Services</p>
      </div>
      <div
        className="d-flex justify-content-center flex-wrap"
        style={{ gap: "30px" }}
      >
        {ServicesArray.map((item, index) => {
          return (
            <div key={index} className="outerWrapperServices">
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="text-decoration-none text-black"
                to={`/form/${item.name.replace(/\s/g, "")}/?vat=${item.vat}+${
                  item.price
                }`}
              >
                <div className="d-flex justify-content-center">
                  <div className="OuterWrapperServicesImages">
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: "90px" }}
                    />
                  </div>
                </div>
                <p className="pt-2 PrimaryColor FontWeight ServiceHeading">
                  {item.name}
                </p>
                <p className="ParagraphFeedBackBox">{item.description}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Services;
