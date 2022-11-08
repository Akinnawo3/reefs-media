import React from "react";
import DonateButton from "./DonateButton";

const WhatIsReefs = () => {
  return (
    <div
      className="p-5 text-start text-white mt-5 position-relative border-0 shadow overlay-two"
      style={{ borderRadius: 20 }}
    >
      <div>
        <div
          className="fw-bold d-inline-block mb-2"
          style={{ color: "#73A5B0" }}
        >
          What is REEFS?
        </div>
        <div className="d-flex">
          <div className="illustration">
            <h2 style={{ color: "#125362" }}>
              Reefs is a digital marketing agency that seeks to drive growth and
              visibility to brands
            </h2>
            <div className="mt-4">
              <DonateButton />
            </div>
          </div>

          <div className=" d-none d-md-block" style={{ width: "40%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsReefs;
