import { useRef, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import InputMask from "react-input-mask";
import styled from "styled-components";

const InputWrapper = styled(Row)`
  margin-bottom: 23px;
  .left-input {
    border-radius: 6px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .right-input {
    border-radius: 6px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-control {
    height: 56px;
    font-weight: 500;
    font-size: 17px;
    line-height: 26px;
    color: #092c4c;
    border: 1.5px solid #e2e5e8;
    &:focus {
      border: 0.25rem solid rgb(13 110 253 / 25%);
      box-shadow: none;
    }
  }
`;

export const InputNested = () => {
  const ref = useRef();

  return (
    <>
      <InputWrapper ref={ref} className="gx-0">
        <Col>
          <InputMask
            mask="99/9999"
            className="form-control left-input"
            type="text"
            name="expiry"
            placeholder="MM/YYYY"
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            name="cvv"
            placeholder="CVV"
            className="right-input"
          />
        </Col>
      </InputWrapper>
    </>
  );
};