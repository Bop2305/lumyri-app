import { Form, FormGroup } from "react-bootstrap";
import styled from "styled-components";

const InputWrapper = styled(FormGroup)`
  position: relative;
  margin-top: 9px;
  margin-bottom: 29px;
  .icon {
    position: absolute;
    top: 50% !important;
    transform: translateY(-50%);
    right: 0;
    margin-right: 23px;
  }

  .form-control {
    height: 50px;
    font-weight: 500;
    font-size: 17px;
    line-height: 26px;
    color: #092c4c;
    border: 1.5px solid #e2e5e8;
    border-radius: 6px;
  }
`;

export const Input = ({ icon = <></>, error = "", ...props }) => {
  return (
    <InputWrapper className="input-wrapper">
      <Form.Control
        style={
          !error ? {} : { border: "1.5px solid red", background: "#FDE9EA" }
        }
        {...props}
      />
      <div className="icon">{icon}</div>
    </InputWrapper>
  );
};
