import Footer from "../../components/auth/Footer";
import Image from "next/image";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import styles from "../../styles/Verify.module.scss";

const CardAdd = () => {
  return (
    <div className={styles.background}>
      <Container>
        <div className="row">
          <div className="col-md-5 offset-2 mt-5">
            <div
              className={`mb-3 d-flex justify-content-start align-items-center ${styles.title}`}
            >
              <Image
                src="/icons/credit-cards-icon.png"
                alt="credit-card"
                width="37px"
                height="37px"
              />
              <span>Add a Card</span>
            </div>
            <Form>
              <h5>Card Details:</h5>
              <Row className="mb-3 mt-3">
                <Form.Group as={Col} xs={7}>
                  <Form.Control
                    type="text"
                    placeholder="Card Number"
                  ></Form.Control>
                </Form.Group>
                <Form.Group as={Col} xs={3}>
                  <Form.Control
                    type="text"
                    placeholder="MM/YYYY"
                  ></Form.Control>
                </Form.Group>
                <Form.Group as={Col} xs={2}>
                  <Form.Control type="text" placeholder="CVV"></Form.Control>
                </Form.Group>
              </Row>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Cardholder name"
                ></Form.Control>
              </Form.Group>
              <div className="mt-3 mb-5">
                <Image
                  src="/icons/info-icon.png"
                  alt="info-icon"
                  width="23px"
                  height="23px"
                />
                <span>
                  We won’t charge your card. You may see a temporary pre
                  authorization charge to verify the card, which will be
                  reversed within a week.
                </span>
              </div>
              <h5>Billing Address:</h5>
              <p>
                Please provide the billing address associated with the credit
                card you have provided avobe.
              </p>
              <Form.Select className="mb-3">
                <option>Country</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Group>
                <Form.Control
                  className="mb-3"
                  type="text"
                  placeholder="Street Address"
                ></Form.Control>
              </Form.Group>
              <Row className="gx-0">
                <Col xs={5}>
                  <Button className="mb-3">Save Payment Method</Button>
                </Col>
                <Col xs={2}>
                  <Button className="mb-3">Cancel</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
        <div className="row">
          <div className="col offset-2">
            <Footer />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CardAdd;
