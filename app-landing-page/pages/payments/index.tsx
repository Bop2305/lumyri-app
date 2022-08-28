import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import styled from "styled-components";
import { ModalCardAdd } from "../../components/modals/ModalCardAdd";
import { DataPayments } from "../../services/MockDataPayments";

const Div = styled.div`
  width: 294.33px;
  height: 169.85px;
  padding: 4.65px 4.65px 4.65px 4.65px;
  border: 2.32668px solid #28a1bb;
  border-radius: 17.9969px;
`;

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      {showModal && (
        <ModalCardAdd
          size="xl"
          show={showModal}
          handleClose={() => setShowModal(false)}
          data={DataPayments}
        />
      )}
      <Div>
        <Button className="mt-5" onClick={() => setShowModal(true)}>
          Open Modal Card Add
        </Button>
      </Div>
    </Container>
  );
};

export default Index;
