import { useFormik } from "formik";
import { Form, Modal, ModalProps, Row } from "react-bootstrap";
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

export const ModalOTP = ({ handleClose, ...props }: ModalOTPProps) => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      firstDigit: "",
      secondDigit: "",
      thirdDigit: "",
      FourDigit: "",
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
              type="text"
              name="firstDigit"
              onChange={handleChange}
              valid={!values.firstDigit}
              invalid={!!values.firstDigit}
            />
            <FormControl type="text" />
            <FormControl type="text" />
            <FormControl type="text" />
          </RowWrapper>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
