import Image from "next/image";
import styles from "../../styles/SignIn.module.scss";
import Footer from "../../components/auth/Footer";
import { Button, Form } from "react-bootstrap";

const SignIn = () => {
  return (
    <div className="container-fluid backgroundAuth row">
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
        <Form style={{ width: "360px" }}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
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
      <div className="col-lg offset-3 d-flex justify-content-start">
        <Footer />
      </div>
    </div>
  );
};

export default SignIn;
