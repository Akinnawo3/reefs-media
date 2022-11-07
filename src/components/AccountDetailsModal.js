import React from "react";
import { Modal, ModalBody } from "reactstrap";

const AccountDetailsModal = () => {
  const { accModalOpen, setAccModalOpen } = useContext(ModalContext);

  return (
    <Modal
      isOpen={accModalOpen}
      toggle={() => setAccModalOpen((prevState) => !prevState)}
      backdrop="static"
      style={{ borderRadius: 16 }}
    >
      <ModalBody>
        <div className="d-flex justify-content-end">
          <AiOutlineClose color="#f9931d" onClick={() => setAccModalOpen(false)} />
        </div>
        <h4>Bank Name: Polaris</h4>
        <h4>Account Name: Polaris</h4>
        <h4>Account Number: 10304040404</h4>
      </ModalBody>
    </Modal>
  );
};

export default AccountDetailsModal;
