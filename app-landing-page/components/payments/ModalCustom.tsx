import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const ModalCustom = styled(Modal)`
  .modal-xl {
    width: 923px !important;
    .modal-header {
      font-weight: 500;
      font-size: 24px;
      line-height: 26px;
      color: #092c4c;
      border-bottom: 0 none;
      justify-content: start !important;
      padding-bottom: 4px;
      padding-top: 30px;
    }
    .modal-content {
      padding-right: 43px;
      padding-left: 43px;
    }
  }
`;
