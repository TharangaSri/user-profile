import { UserContext } from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "../../utils/PhoneInputHelper";
import FileUploadHelpers from "../../utils/ImageUploadHelpers";

function EditUserForm({ theUser }) {
  const id = theUser.id;
  const [firstname, setFirstName] = useState(theUser.firstname);
  const [lastname, setLastname] = useState(theUser.lastname);
  const [address, setAddress] = useState(theUser.address);
  const [contact, setContact] = useState(theUser.contact);
  const [dateofbirth, setDateofbirth] = useState(theUser.dateofbirth);
  const [email, setEmail] = useState(theUser.email);
  const [image, setImage] = useState(theUser.image);

  //Set Contact Statue
  const handleOnChangePhoneInput = (value) => {
    // setUser({ ...newUser, contact: value });
  };

  //Edit User Function
  const { editUserProfile } = useContext(UserContext);
  const editedUserProfile = {
    id,
    firstname,
    lastname,
    address,
    contact,
    dateofbirth,
    email,
    image,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editUserProfile(id, editedUserProfile);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <FileUploadHelpers setUser={setContact} newUser={setImage} />
          <Form.Control
            type="text"
            placeholder="First Name *"
            required
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          ></Form.Control>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          ></Form.Control>
          <Form.Control
            type="textarea"
            placeholder="Address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
            onChange={(e) => setDateofbirth(e.target.value)}
          ></Form.Control>
          <Form.Control
            type="email"
            placeholder="Email *"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <div className="row">
          <Button variant="success" type="submit" className="btn btn-success">
            Edit User Profile
          </Button>
        </div>
      </Form>
    </>
  );
}

export default EditUserForm;
