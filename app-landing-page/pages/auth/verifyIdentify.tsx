import Footer from "../../components/auth/Footer";
import Image from "next/image";
import Link from "next/link";
import { Card, Container } from "react-bootstrap";
import styles from "../../styles/Verify.module.scss";

const VerifyIdentify = () => {
  return (
    <div className={styles.background}>
      <Container>
        <div className="row">
          <div className="col-md-5 offset-2" style={{ marginTop: "11.5%" }}>
            <Card.Body>
              <Card.Title>Verify Your Identity</Card.Title>
              <br />
              <Card.Subtitle>
                To access the Lumyri platform, a payment method should be used
                to verify your identity, this allows us to protect our system
                from spammers and bots.
              </Card.Subtitle>
              <br />
              <br />
              <Card.Text>Select payment method type:</Card.Text>
              <br />
              <div className="row border-1">
                <div className="col-md-2 d-flex align-items-start justify-content-center">
                  <Image
                    src="/icons/credit-cards-icon.png"
                    alt="card"
                    width="37px"
                    height="37px"
                  />
                </div>
                <div className="col-md-8">
                  <Link href="/auth/cardAdd">
                    <a>
                      <h5>Add a Card</h5>
                      <p>
                        We accept visa, master card, American Express and
                        Discover Credit Cards
                      </p>
                    </a>
                  </Link>
                </div>
                <div className="col-md-2 d-flex align-items-center">{">"}</div>
              </div>
              <div className="row">
                <div className="col-md-2 d-flex align-items-start justify-content-center">
                  <Image
                    src="/icons/paypal-icon.png"
                    alt="paypal"
                    width="37px"
                    height="37px"
                  />
                </div>
                <div className="col-md-8">
                  <Link href="#">
                    <a>
                      <h5>Pre-Pay with PayPal</h5>
                      <p>
                        Initiate a one-time transaction to verify your identity
                        in line of providing a card
                      </p>
                    </a>
                  </Link>
                </div>
                <div className="col-md-2 d-flex align-items-center">{">"}</div>
              </div>
            </Card.Body>
          </div>
        </div>
        <div className="row align-items-start justify-content-start">
          <div className="col-6 align-items-start justify-content-start offset-2">
            <Footer />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VerifyIdentify;
