import React from "react";
import { Modal } from "react-bootstrap";

interface LayoutProps {
  children: React.ReactNode;
}

export const ModalBackground = ({ children, ...props }: LayoutProps) => (
  <>
    <Modal className="background-modal">{children}</Modal>
  </>
);
