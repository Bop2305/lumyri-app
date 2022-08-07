import { useFormik } from "formik";
import { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { Modal, ModalHeader, ModalTitle, ModalBody } from "react-bootstrap";
import { ModalBackground } from "../auth/ModalBackground";

interface Values {
  contact: string;
}

export const ModalForgotPassword = ({ ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    props.handleCloseModal();
  };

  useEffect(() => {
    console.log("use effect", props.show);
    setShow(props.show);
  }, [props.show]);

  const formik = useFormik({
    initialValues: {
      contact: "",
    },
    onSubmit: (values: Values) => {
      console.log(values);
      handleClose();
    },
  });
  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose}>
        <div className="background-modal">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <ModalHeader className="modal-header">
                <ModalTitle>Forgot Password</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <p className="mb-5">
                  Enter your email address or phone number, and we will send you
                  a link to get back into your account.
                </p>
                <Form onSubmit={formik.handleSubmit} className="modal-form">
                  <FormGroup>
                    <Form.Control
                      type="text"
                      name="contact"
                      placeholder="Email address or phone number"
                      className="mb-3"
                    />
                  </FormGroup>
                  <Button type="submit" className="mb-3 modal-btn">
                    Send Login link
                  </Button>
                </Form>
                <Link href="#">
                  <a>Create a new Account</a>
                </Link>
              </ModalBody>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
