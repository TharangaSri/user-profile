import CreateUserForm from "../components/forms/CreateUserForm";
import { Modal, Button } from "react-bootstrap";

function CreateFormModelWindowHelper({ show, handleClose, title }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateUserForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateFormModelWindowHelper;
