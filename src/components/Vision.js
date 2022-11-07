import React from "react";

const Vision = () => {
  return (
    <div className="mt-5 vision ">
      <div
        className="fw-bold px-3 py-1 d-inline-block"
        style={{
          color: "#F9931D",
          backgroundColor: "#fef2e6",
          borderRadius: 20,
        }}
      >
        OUR VISION
      </div>

      <h2
        className="d-block mt-3 px-5 pb-4 text-wrap"
        style={{ color: "#125462", fontWeight: 900, fontSize: "2.5rem" }}
      >
        Leveraging the culture of online community to drive{" "}
        <span style={{ color: "#E71D35" }}>visibility</span><span>, </span>
        <span style={{ color: "#E71D35" }}>growth </span>
         and <span style={{ color: "#E71D35" }}>sales</span> for businesses
      </h2>
    </div>
  );
};

export default Vision;
