import React from "react";
import DonateButton from "./DonateButton";

const EvesBirthday = () => {
  return (
    <div
      className="f-card p-5 text-start text-white mt-5"
      style={{ borderRadius: 20,backgroundColor:"#16697b" }}
    >
      <div className="w-md-50">
        <h3 style={{ fontWeight: 700, fontSize: 50 }} className="text-md-nowrap">
          It’s Eve’s Birthday
        </h3>
        <div className="mt-3">
          Convert your gift to a donation to support <br className="d-none d-md-block"/> REEFS MVP development
        </div>
        <div className="my-5">
          <DonateButton />
        </div>
      </div>
    </div>
  );
};

export default EvesBirthday;
