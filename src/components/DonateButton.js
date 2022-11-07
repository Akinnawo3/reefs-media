import React, { useContext } from "react";
import { Button } from "reactstrap";
import { ModalContext } from "../contexts/modalContext";

const DonateButton = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <div className=" d-inline-block mx-auto d-btn">
      <Button
        className="d-flex px-4 align-items-center justify-content-center border-0"
        style={{ background: "#F9931D" }}
        onClick={() => setIsOpen(true)}
      >
        <span className="me-2 lv-ivon">
          <img
            alt="dn-icon"
            src="images/dn-love.png"
            height="25px"
            width="25px"
          />
        </span>
        <h5 className="fw-bold mt-1">Donate</h5>
      </Button>
    </div>
  );
};

export default DonateButton;
