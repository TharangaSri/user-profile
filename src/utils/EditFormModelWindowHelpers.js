import EditUserForm from "../components/forms/EditUserForm";
import { Modal, Button } from "react-bootstrap";

function EditFormModelWindowHelpers({ show, handleClose, title, user }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm theUser={user} />
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

export default EditFormModelWindowHelpers;
