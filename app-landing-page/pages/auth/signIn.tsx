import Image from "next/image";
import styles from "../../styles/SignIn.module.scss";
import Footer from "../../components/auth/Footer";
import { Button, Container, Form } from "react-bootstrap";

import { useFormik } from "formik";
import { ModalForgotPassword } from "../../components/modals/ModalForgotPassword";
import React, { useState } from "react";

interface Values {
  email: string;
  password: string;
}

interface Errors {
  [key: string]: string;
}

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values: Values) => {
      console.log(values);
    },
    validate: (values: Values) => {
      let errors: Errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Require";
      }
      return errors;
    },
  });

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="backgroundAuth">
      <Container>
        {showModal ? (
          <ModalForgotPassword
            show={showModal}
            handleCloseModal={() => setShowModal(false)}
          />
        ) : null}
        <div className="row">
          <div className={`col-lg-3 offset-3 ${styles.leftSide}`}>
            <div className={styles.logo}>
              <Image
                src="/icons/logo.png"
                alt="logo"
                width="105px"
                height="108px"
              />
            </div>
            <h1>
              Sign In to Start <strong>Lumyri</strong>
            </h1>
            <div className={styles.registerLink}>
              <p>If you don’t have an account? you can</p>
              <a href="#">Register here!</a>
            </div>
            <div className={styles.infoLink}>
              <Image
                src="/icons/mail-icon.png"
                alt="email-icon"
                width="22px"
                height="18px"
              />
              <span>info@lumyri.com</span>
            </div>
          </div>
          <div className={`col-lg-3 offset-2 ${styles.rightSide}`}>
            <Form style={{ width: "360px" }} onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </Form.Group>
              {formik.errors.email ? (
                <div className="mb-3 error">{formik.errors.email}</div>
              ) : null}
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </Form.Group>
              {formik.errors.password ? (
                <div className="mb-3 error">{formik.errors.password}</div>
              ) : null}
              <div className="row">
                <Form.Group className="col mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <span className="col mb-3">
                  <a href="#" onClick={() => setShowModal(true)}>
                    Forgot password
                  </a>
                </span>
              </div>
              <Button
                variant="primary"
                type="submit"
                style={{ width: "360px" }}
                className="btnSubmit"
              >
                Sign In
              </Button>
            </Form>
            <div className="mt-3">
              <Button
                href="#"
                className={`mb-3 btnLink ${styles.signInButton}`}
                style={{ width: "360px" }}
              >
                <div className="justify-content-center">
                  <Image
                    src="/icons/apple-icon.png"
                    alt="apple-icon"
                    width="24px"
                    height="24px"
                  />
                  Sign in with Apple
                </div>
              </Button>
              <Button href="#" className="mb-3" style={{ width: "360px" }}>
                <div className="justify-content-center">
                  <Image
                    src="/icons/apple-icon.png"
                    alt="apple-icon"
                    width="24px"
                    height="24px"
                  />
                  Sign in with Apple
                </div>
              </Button>
              <Button href="#" className="mb-3" style={{ width: "360px" }}>
                <div className="justify-content-center">
                  <Image
                    src="/icons/apple-icon.png"
                    alt="apple-icon"
                    width="24px"
                    height="24px"
                  />
                  Sign in with Apple
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg offset-3 d-flex justify-content-start">
            <Footer />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
