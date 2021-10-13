import { UserContext } from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "../../utils/PhoneInputHelper";
import FileUploadHelpers from "../../utils/FileUploadHelpers";

function CreateUserForm() {
  //Create User Function
  const { createUserProfile } = useContext(UserContext);

  //User State
  const [newUser, setUser] = useState({
    firstname: "",
    lastname: "",
    address: "",
    contact: "",
    dateofbirth: "",
    email: "",
    image: "",
  });

  //From Input Change Capture
  const onInputChange = (e) => {
    setUser({ ...newUser, [e.target.name]: e.target.value });
  };

  //Set Contact Statue
  const handleOnChangePhoneInput = (value) => {
    setUser({ ...newUser, contact: value });
  };

  const { firstname, lastname, address, contact, dateofbirth, email, image } =
    newUser;

  //On Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserProfile(
      firstname,
      lastname,
      address,
      contact,
      dateofbirth,
      email,
      image
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <FileUploadHelpers setUser={setUser} newUser={newUser} />
        <Form.Control
          type="text"
          placeholder="First Name *"
          required
          name="firstname"
          value={firstname}
          onChange={(e) => onInputChange(e)}
        ></Form.Control>
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="lastname"
          value={lastname}
          onChange={(e) => onInputChange(e)}
        ></Form.Control>
        <Form.Control
          type="textarea"
          placeholder="Address"
          name="address"
          value={address}
          onChange={(e) => onInputChange(e)}
        ></Form.Control>
        <PhoneInput
          handleOnChangePhoneInput={handleOnChangePhoneInput}
          contact={contact}
        />
        <Form.Control
          type="date"
          placeholder="Date Of Birth"
          name="dateofbirth"
          value={dateofbirth}
          onChange={(e) => onInputChange(e)}
        ></Form.Control>
        <Form.Control
          type="email"
          placeholder="Email *"
          required
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
        ></Form.Control>
      </Form.Group>
      <div className="row">
        <Button variant="success" type="submit" className="btn btn-success">
          Create New User Profile
        </Button>
      </div>
    </Form>
  );
}

export default CreateUserForm;
