import { Button } from "react-bootstrap";
import styled from "styled-components";

export const Btn = ({
  height = "50px",
  style = "default",
  label = "",
  ...props
}) => {
  const CustomButton = styled(Button)`
    height: ${(props) => height};
    font-weight: ${(props) => (height === "26px" ? `500` : `500`)};
    font-size: ${(props) => (height === "26px" ? `14px` : `18px`)};
    line-height: ${(props) => (height === "26px" ? `24px` : `21px`)};
    color: ${(props) => (style === "outline" ? `#41B49B` : `#ffffff`)};
    background: ${(props) => (style === "outline" ? `#ffffff` : `#41B49B`)};
    border: ${(props) =>
      style === "outline" ? `1.5px solid #41B49B` : `1.5px solid #ffffff`};
    border-radius: ${(props) => (height === "26px" ? `4px` : `10px`)};
    ${(props) =>
      height === "26px"
        ? `padding-top: 0;`
        : "padding-left: 24px; padding-right: 24px;"};
    :hover {
      background-color: #41b49b;
      border: none;
    }
  `;

  return <CustomButton {...props}>{label}</CustomButton>;
};
