import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { ModalCardAdd } from "../../components/modals/ModalCardAdd";
import { DataPayments } from "../../services/MockDataPayments";

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
      <Button className="mt-5" onClick={() => setShowModal(true)}>
        Open Modal Card Add
      </Button>
    </Container>
  );
};

export default Index;
