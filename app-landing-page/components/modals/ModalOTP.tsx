import { useFormik } from "formik";
import { useState } from "react";
import { Button, Form, Modal, ModalProps, Row } from "react-bootstrap";
import OtpInput from "react-otp-input";
import styled from "styled-components";

interface ModalOTPProps extends ModalProps {
  handleClose: () => void;
}

type OTPDto = {
  firstDigit: string;
  secondDigit: string;
  thirdDigit: string;
  FourDigit: string;
};

const RowWrapper = styled(Row)`
  justify-content: center;
  &:last-child {
    margin-right: 0;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

const FormControl = styled(Form.Control)`
  width: 57px;
  height: 66px;
  border-radius: 6px;
  margin-left: 14px;
  &:focus {
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0px 7px 20px rgba(47, 62, 77, 0.12);
    border: 0;
  }
  &:invalid {
    border: 1.5px solid #eceff3;
    background: #ffffff;
  }
  &:valid {
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    color: #092c4c;
    background: #f1f3f6;
  }
`;

const OtpWrapper = styled(Row)`
  // input:not(:last-child) {
  //   margin-left: 14px;
  // }
  input:nth-child(n + 3) {
    margin-left: 14px;
  }
`;

export const ModalOTP = ({ handleClose, ...props }: ModalOTPProps) => {
  const [otp, setOtp] = useState("");
  const num = "1234123412341234";
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      firstDigit: "",
      secondDigit: "",
      thirdDigit: "",
      FourDigit: "",
    },
    validate: (values: OTPDto) => {
      let errors: { [key: string]: string } = {};
      if (
        !/^(0[1-9]|1[0-2])(\/)(2020|20[3-9][0-9]|2[1-4][0-9]{2}|2500)$/i.test(
          values.firstDigit
        )
      ) {
        errors.firstDigit = "Invalid";
      }

      return errors;
    },
    onSubmit: (values: OTPDto) => {
      console.log(values);
    },
  });
  return (
    <Modal onHide={handleClose} {...props}>
      <Modal.Header>
        <Modal.Title>Nhap OTP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <RowWrapper>
            <FormControl
              type="number"
              name="firstDigit"
              values={values.firstDigit}
              onChange={handleChange}
            />
            <FormControl type="number" />
            <FormControl type="text" />
            <FormControl type="text" />
          </RowWrapper>
          <OtpWrapper>
            <OtpInput
              value={otp}
              onChange={() => setOtp(otp)}
              numInputs={4}
              inputStyle={"digitStyle"}
            />
          </OtpWrapper>
          <Button type="submit">Submit</Button>
        </Form>
        <div>{num.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ")}</div>
        <div>{num.replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 ")}</div>
      </Modal.Body>
    </Modal>
  );
};
