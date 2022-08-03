import Footer from "../../components/auth/Footer";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import styles from "../../styles/Verify.module.scss";

const VerifyIdentify = () => {
  <style jsx>
    {`
      .leftSide {
        margin-top: 11.5%;
      }
    `}
  </style>;
  return (
    <div className={styles.background}>
      <Container>
        <div className="row">
          <div className="col-md-5 offset-2 left-side">
            <h4>Verify Your Identity</h4>
            <br />
            <p>
              To access the Lumyri platform, a payment method should be used to
              verify your identity, this allows us to protect our system from
              spammers and bots.
            </p>
            <br />
            <br />
            <h6>Select payment method type:</h6>
            <br />
            <div className="row mb-3 btn-link">
              <div className="col-md-2 mt-2 d-flex align-items-start justify-content-center">
                <Image
                  src="/icons/credit-cards-icon.png"
                  alt="card"
                  width="37px"
                  height="37px"
                />
              </div>
              <div className="col-md-9 mt-2 ">
                <Link href="/auth/cardAdd">
                  <a>
                    <h5>Add a Card</h5>
                    <p>
                      We accept visa, master card, American Express and Discover
                      Credit Cards
                    </p>
                  </a>
                </Link>
              </div>
              <div className="col-md-1 mt-2 d-flex align-items-center">
                {">"}
              </div>
            </div>
            <div className="row btn-link">
              <div className="col-md-2 mt-2 d-flex align-items-start justify-content-center">
                <Image
                  src="/icons/paypal-icon.png"
                  alt="paypal"
                  width="37px"
                  height="37px"
                />
              </div>
              <div className="col-md-9 mt-2">
                <Link href="#">
                  <a>
                    <h5>Pre-Pay with PayPal</h5>
                    <p>
                      Initiate a one-time transaction to verify your identity in
                      line of providing a card
                    </p>
                  </a>
                </Link>
              </div>
              <div className="col-md-1 d-flex align-items-center">{">"}</div>
            </div>
          </div>
        </div>
        <div className="row align-items-start justify-content-start">
          <div className="col-6 align-items-start justify-content-start offset-2">
            <Footer />
          </div>
        </div>
      </Container>
      <style jsx>
        {`
          .left-side {
            margin-top: 11.5%;
          }

          .btn-link {
            border: 1.5px solid #d6dae6;
            border-radius: 6px;
          }

          .btn-link:hover {
            background-color: #41b49b;
            color: #ffffff;
          }
        `}
      </style>
    </div>
  );
};

export default VerifyIdentify;
