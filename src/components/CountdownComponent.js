import React from "react";
import Countdown from "react-countdown";
import { Card } from "reactstrap";
import DonateButton from "./DonateButton";

const CountdownComponent = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    const Completionist = () => <span>Countdown completed</span>;

    const items = [
      { unit: "Days", value: days },
      { unit: "Hours", value: hours },
      { unit: "Minutes", value: minutes },
      { unit: "Seconds", value: seconds },
    ];
    // console.log(typeof "days");
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="mx-auto mt-5 ">
          <h5
            className="text-center mb-1 d-inline-block "
            style={{ color: "#79959C" }}
          >
            THIS DONATION ENDS ON{" "}
            <span style={{ color: "#0D3F4A" }}>EVE'S BIRTHDAY</span>
          </h5>

          <div >
            <div className="d-inline-flex justify-content-center flex-wrap">
              {items.map((item) => (
                <div hey={item.unit} className="mx-3 mt-3 justify-self-center">
                  <Card
                    style={{ width: 120, height: 110, color: "#16697B" }}
                    className="pt-2"
                  >
                    <h1 style={{ fontWeight: 700, fontSize: 49.3 }}>
                      {item.value}
                    </h1>
                    <small>{item.unit}</small>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="d-flex justify-content-between ">
            <div className="d-flex flex-column text-center">
              <div
                className={`fw-bold fs-3 p-0 m-0 lh-1 countdown-unit ${
                  hours == 0 && ""
                } text-jost`}
              >
                {days}
              </div>
              <small style={{ fontSize: 10 }}>Days</small>
            </div>
            <div className="d-flex flex-column text-center">
              <div
                className={`fw-bold fs-3 p-0 m-0 lh-1 countdown-unit ${
                  minutes == 0 && " "
                } text-jost`}
              >
                {hours}
              </div>
              <small style={{ fontSize: 10 }}>Hours</small>
            </div>
            <div className="d-flex flex-column text-center">
              <div
                className={`fw-bold fs-3 p-0 m-0 lh-1 countdown-unit ${
                  seconds == 0 && ""
                }`}
                text-jost
              >
                {minutes}
              </div>
              <small style={{ fontSize: 10 }}>Minutes</small>
            </div>
            <div className="d-flex flex-column text-center">
              <div className="fw-bold fs-3 p-0 m-0 lh-1  animate__animated  animate__fadeInUp animate__fadeOutUp animate__infinite	infinite text-jost">
                {seconds}
              </div>
              <small style={{ fontSize: 10 }}>Seconds</small>
            </div>
          </div> */}
        </div>
      );
    }
  };
  return (
    <div className="countdown py-3">
      <Countdown date={"2022-11-18T00:00:33.089Z"} renderer={renderer} />
      <div className="mt-4">
          <DonateButton />
      </div>
    </div>
  );
};

export default CountdownComponent;
