import React, { useContext, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
} from "reactstrap";
import { ModalContext } from "../contexts/modalContext";
import { FaRegUser } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { NotificationManager } from "react-notifications";
const DonateModal = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`https://api.rollace.org/eve/birthday`, {
      method: "POST",
      body: JSON.stringify({
        name: formData?.name,
        email: formData?.email,
        phone_number: formData?.phoneNumber,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.status === "success") {
          setFormData({});
          setIsOpen(false);
          NotificationManager.success(json.message);
        }
        if (json.status === "error") {
          NotificationManager.error(json.message);
        }
      })
      .catch((err) => NotificationManager.error(err?.message))
      .finally(() => {
        // alert("Yeaaaaaa");
        setLoading(false);
        setFormData({});
      });
  };
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Modal
      isOpen={isOpen}
      toggle={() => setIsOpen((prevState) => !prevState)}
      size="md"
      backdrop="static"
      style={{ borderRadius: 16 }}
    >
      <ModalBody className="py-3 px-2" style={{ borderRadius: 6 }}>
        <div className="mx-auto" style={{ width: "85%" }}>
          <div className="d-flex justify-content-between align-items-center ">
            <h3
              className="mb-0"
              style={{ color: "#125462", fontSize: 30, fontWeight: 600 }}
            >
              Donate
            </h3>
            <div>
              <AiOutlineClose
                color="#f9931d"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>

          <small className="text-muted lh-base">
            Reefs media will set aside a token to promote your business or
            personal page when we launch
          </small>
          <Form onSubmit={onSubmit} className="mt-4">
            <FormGroup floating className="p-0">
              <Input
                className=""
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                onChange={onChange}
                value={formData?.name || ""}
                required
              />
              <Label for="name" className="text-muted">
                {/* <FaRegUser size={15} className="me-3" /> */}
                Name
              </Label>
            </FormGroup>
            <FormGroup floating className="p-0">
              <Input
                className=""
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                type="tel"
                onChange={onChange}
                value={formData?.phoneNumber || ""}
                required
              />
              <Label for="telephone" className="text-muted">
                {/* <BsPhone size={15} className="me-3" /> */}
                Phone number
              </Label>
            </FormGroup>
            <FormGroup floating className="p-0">
              <Input
                className=""
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                onChange={onChange}
                value={formData?.email || ""}
                required
              />
              <Label for="email" className="text-muted">
                {/* <AiOutlineMail size={15} className="me-3" /> */}
                Email
              </Label>
            </FormGroup>

            <div className="mt-2 text-muted">Do you have a business?</div>

            <div className="d-flex">
              <FormGroup check className="w-50">
                <Input
                  name="haveBusiness"
                  type="radio"
                  value={"yes"}
                  checked={formData?.haveBusiness === "yes"}
                  onChange={onChange}
                  required
                />
                <Label check>
                  <small>
                    Yes, I have a <br /> business
                  </small>
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="haveBusiness"
                  type="radio"
                  value={"no"}
                  checked={formData?.haveBusiness === "no"}
                  onChange={onChange}
                  required
                />

                <Label check>
                  <small>
                    {" "}
                    No, I dont have a <br /> business
                  </small>
                </Label>
              </FormGroup>
            </div>

            <div className=" d-inline-block mx-auto d-btn mt-3">
              <Button
                className="d-flex px-4 align-items-center justify-content-center border-0"
                style={{ background: "#F9931D" }}
              >
                <span className="me-2 lv-ivon">
                  <img
                    alt="dn-icon"
                    src="/images/dn-love.png"
                    height="25px"
                    width="25px"
                  />
                </span>
                <h5 className="fw-bold mt-1">Donate now</h5>
              </Button>
            </div>
          </Form>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default DonateModal;
