import React, { useContext } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { AiOutlineClose } from "react-icons/ai";
import { NotificationManager } from "react-notifications";
import { Modal, ModalBody } from "reactstrap";
import { ModalContext } from "../contexts/modalContext";

const AccountDetailsModal = () => {
  const { accModalOpen, setAccModalOpen } = useContext(ModalContext);

  return (
    <Modal
      isOpen={accModalOpen}
      toggle={() => setAccModalOpen((prevState) => !prevState)}
      backdrop="static"
      style={{ borderRadius: 16 }}
      centered
    >
      <ModalBody>
        <div className="d-flex justify-content-end">
          <AiOutlineClose
            color="#f9931d"
            onClick={() => setAccModalOpen(false)}
          />
        </div>
        <h4>
          Bank Name:
          <br />
          FCMB{" "}
        </h4>
        <h4>
          Account Name:
          <br /> Kweekatel Consults services{" "}
        </h4>
        <div className="d-flex justify-content-between align-items-end">
          <h4>
            Account Number:
            <br /> 8109494017
          </h4>
          <span>
            <CopyToClipboard
              text={"8109494017"}
              onCopy={() =>
                NotificationManager.success("Account number Copied")
              }
            >
              <div className="text-end">
                <small className="text-muted cursor-pointer text-nowrap">
                  Click to copy
                </small>
              </div>
            </CopyToClipboard>
          </span>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AccountDetailsModal;
