import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function CreateUserForm() {
  //Create User Function
  const { createUser } = useContext(UserContext);

  return (
    <Form>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="First Name *"
          required
          name="firstname"
        ></Form.Control>
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="lastname"
        ></Form.Control>
        <Form.Control
          type="textarea"
          placeholder="Address"
          required
          name="address"
        ></Form.Control>
        <PhoneInput
          type="phone"
          placeholder="Contact Number"
          name="contact"
        ></PhoneInput>
        <Form.Control
          type="text"
          placeholder="Date Of Birth"
          name="dateofbirth"
        ></Form.Control>
        <Form.Control
          type="email"
          placeholder="Email *"
          required
          name="email"
        ></Form.Control>
      </Form.Group>
      <Button variant="success" type="submit" className="btn btn-success">
        Create New User Profile
      </Button>
    </Form>
  );
}

export default CreateUserForm;
