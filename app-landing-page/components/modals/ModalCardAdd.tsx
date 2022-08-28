import { useFormik, FormikErrors } from "formik";
import { useState } from "react";
import {
  Col,
  Form,
  FormGroup,
  FormLabel,
  ModalBody,
  ModalHeader,
  ModalProps,
  ModalTitle,
  Row,
} from "react-bootstrap";
import styled from "styled-components";
import { DataPaymentsType } from "../../services/MockDataPayments";
import { IconCircle } from "../icons/IconCircle";
import { IconVisa } from "../icons/IconVisa";
import { Btn } from "../payments/Btn";
import { Input } from "../payments/Input";
import { ModalCustom } from "../payments/ModalCustom";

interface ModalCardAddProps extends ModalProps {
  handleClose: () => void;
  data: DataPaymentsType;
}

type CardDto = { [key: string]: string } & {
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvv: string;
  country: string;
  firstName: string;
  lastName: string;
  streetName: string;
  aptNumber: string;
  stateId: string;
  zipCode: string;
};

const t = (parameter: string): string => {
  return parameter;
};

const FormLabelCustom = styled(FormLabel)`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #737a83;
`;

const Footer = styled(Row)`
  margin-top: 23px;
  margin-bottom: 31px;
`;

const Checkbox = styled(Form.Check)`
  .form-check-input {
    width: 20px;
    height: 21px;
    background: #41b49b;
    border-radius: 3px;
    border: none;
  }
  .form-check-label {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #737a83;
    margin-left: 14px;
  }
`;

const FormSelect = styled(Form.Select)`
  height: 50px;
  margin-top: 9px;
  margin-bottom: 29px;
  font-weight: 500;
  font-size: 17px;
  line-height: 26px;
  border: 1.5px solid #e2e5e8;
  border-radius: 6px;
  cursor: pointer;
`;

export const ModalCardAdd = ({
  handleClose,
  data,
  ...props
}: ModalCardAddProps) => {
  const [addressState, setAddressState] = useState({});
  const [isDisable, setIsDisable] = useState(false);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      cardNumber: "",
      cardName: "",
      expiry: "",
      cvv: "",
      country: "",
      firstName: "",
      lastName: "",
      streetName: "",
      aptNumber: "",
      stateId: "",
      zipCode: "",
    },
    validate: (values: CardDto) => {
      let errors: FormikErrors<{ [field: string]: string }> = {};
      for (const key in values) {
        if (!values[key]) errors[key] = "Require";
      }

      return errors;
    },
    validateOnChange: false,
    onSubmit: (values: CardDto) => {
      console.log({ ...values, addressState });
      handleClose();
    },
  });

  const addNewAddress = (
    stateId: string,
    streetName: string,
    zipCode: string,
    aptNumber: string
  ) => {
    console.log("add new address");
    return setAddressState({
      stateId,
      streetName,
      zipCode,
      aptNumber,
    });
  };
  return (
    <>
      <ModalCustom onHide={handleClose} {...props}>
        <ModalHeader>
          <ModalTitle>{t("payments:addNewACard")}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <FormGroup>
                  <FormLabelCustom>{t("payments:cardNumber")}</FormLabelCustom>
                  <Input
                    icon={<IconVisa />}
                    type="text"
                    name="cardNumber"
                    onChange={handleChange}
                    value={values.cardNumber}
                    error={errors.cardNumber}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <FormLabelCustom>{t("payments:nameOnCard")}</FormLabelCustom>
                  <Input
                    type="text"
                    name="cardName"
                    onChange={handleChange}
                    value={values.cardName}
                    error={errors.cardName}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <FormGroup>
                      <FormLabelCustom>
                        {t("payments:expirationDate")}
                      </FormLabelCustom>
                      <Input
                        type="text"
                        name="expiry"
                        onChange={handleChange}
                        value={values.expiry}
                        error={errors.expiry}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <FormLabelCustom>CVV</FormLabelCustom>
                      <Input
                        icon={<IconCircle />}
                        type="text"
                        name="cvv"
                        onChange={handleChange}
                        value={values.cvv}
                        error={errors.cvv}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
              <Col>
                <FormGroup>
                  <FormLabelCustom>{t("payments:country")}</FormLabelCustom>
                  <FormSelect
                    value={values.country}
                    onChange={(e: { target: { value: string } }) => {
                      values.country = e.target.value;
                    }}
                  >
                    {data.map(({ address }) => (
                      <option key={address.countryId} value={address.countryId}>
                        {address.countryName}
                      </option>
                    ))}
                  </FormSelect>
                </FormGroup>
              </Col>
            </Row>
            {data.map(({ id, firstName, lastName, address }) => (
              <div className="radio-wrapper" key={id}>
                <Form.Check
                  type="radio"
                  name="address"
                  checked={isDisable === true}
                  onChange={() => {
                    setIsDisable(!isDisable);
                    setAddressState(address);
                  }}
                  label={
                    <>
                      <span className="title">{`${firstName} ${lastName}`}</span>
                      <span className="street">{`${address.streetName} ${address.zipCode} ${address.stateName}`}</span>
                    </>
                  }
                ></Form.Check>
              </div>
            ))}
            <div className="radio-wrapper">
              <Row className="mb-4">
                <Col xs={7}>
                  <Form.Check
                    type="radio"
                    name="address"
                    checked={isDisable === false}
                    onChange={() => setIsDisable(!isDisable)}
                    label={
                      <>
                        <span className="title">
                          {t("payments:addNewAddress")}
                        </span>
                      </>
                    }
                  />
                </Col>
                <Col className="text-end">
                  <Btn
                    height="26px"
                    style="outline"
                    label={t("payments:cancel")}
                  />
                </Col>
                <Col className="text-end">
                  <Btn
                    height="26px"
                    label={t("payments:save")}
                    onClick={() =>
                      addNewAddress(
                        values.stateId,
                        values.streetName,
                        values.zipCode,
                        values.aptNumber
                      )
                    }
                  />
                </Col>
              </Row>
              <fieldset disabled={isDisable}>
                <Row>
                  <Col>
                    <FormGroup>
                      <FormLabelCustom>
                        {t("payments:firstName")}
                      </FormLabelCustom>
                      <Input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        value={values.firstName}
                        error={errors.firstName}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <FormLabelCustom>
                        {t("payments:lastName")}
                      </FormLabelCustom>
                      <Input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        value={values.lastName}
                        error={errors.lastName}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <FormLabelCustom>
                        {t("payments:streetAddress")}
                      </FormLabelCustom>
                      <Input
                        type="text"
                        name="streetName"
                        onChange={handleChange}
                        value={values.streetName}
                        error={errors.streetName}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <FormGroup>
                          <FormLabelCustom>
                            {t("payments:aptNumber")}
                          </FormLabelCustom>
                          <Input
                            type="text"
                            name="aptNumber"
                            onChange={handleChange}
                            value={values.aptNumber}
                            error={errors.aptNumber}
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <FormLabelCustom>
                            {t("payments:stateName")}
                          </FormLabelCustom>
                          <FormSelect
                            value={values.stateId}
                            onChange={(e: { target: { value: string } }) => {
                              values.stateId = e.target.value;
                            }}
                          >
                            {data.map(({ address }) => (
                              <option
                                key={address.stateId}
                                value={address.stateId}
                              >
                                {address.stateName}
                              </option>
                            ))}
                          </FormSelect>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <FormGroup>
                      <FormLabelCustom>{t("payments:zipCode")}</FormLabelCustom>
                      <Input
                        type="text"
                        name="zipCode"
                        onChange={handleChange}
                        value={values.zipCode}
                        error={errors.zipCode}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </fieldset>
            </div>
            <Footer>
              <Col xs={5} className="d-flex align-items-center">
                <Checkbox
                  type="checkbox"
                  label={t("payments:setAsDefaultCard")}
                />
              </Col>
              <Col className="text-end">
                <Btn
                  style="outline"
                  label={t("payments:cancel")}
                  onClick={handleClose}
                />
              </Col>
              <Col className="text-end">
                <Btn label={t("payments:continue")} type="submit" />
              </Col>
            </Footer>
          </Form>
        </ModalBody>
      </ModalCustom>
    </>
  );
};
