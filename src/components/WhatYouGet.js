import React from "react";
import DonateButton from "./DonateButton";

const WhatYouGet = () => {
  return (
    <div
      className="p-5 text-start text-white mt-5 wht-y-g position-relative"
      style={{ borderRadius: 20 }}
    >
      <div
        className="position-absolute h-100 w-100 top-0 start-0 overlay-one"
        style={{ borderRadius: 20, backgroundColor: "#38CDE4",zIndex:-10 }}
      ></div>
      <div style={{zIndex:10}}>
        <div
          className="px-3 py-1 fw-bold d-inline-block mb-3"
          style={{ backgroundColor: "#16697b" }}
        >
          WHAT YOU GET
        </div>
        <div className="d-flex">
          <div className="illustration">
            <h2 style={{ color: "#125362" }}>
              Reefs media will set aside a token to promote your business or
              personal page when we launch.
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

export default WhatYouGet;
