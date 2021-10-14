import { useContext, useState, useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import CreateFormModelWindowHelper from "../utils/CreateFormModelWindowHelper";
import User from "./User";

function UserList() {
  const { users } = useContext(UserContext);

  //Alert State
  const [showAlert, setShowAlert] = useState(false);

  //Alert Auto Close
  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  //Add From - Show/Hide state of model window
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  //Close Model Window After Submit
  useEffect(() => {
    handleClose();
    return () => {
      handleShowAlert();
    };
  }, [users]);
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-7 col-lg-9">
            <h2>
              <b>Fusiongrove</b> <i>Profile Manager</i>
            </h2>
          </div>
          <div className="col-sm-5 col-lg-3">
            <Button className="btn btn-warning " onClick={handleShow}>
              <span>
                <b>
                  Create New User Profile
                  <i className="material-icons ">&#xE147;</i>
                </b>
              </span>
            </Button>
          </div>
        </div>
      </div>
      <Alert
        variant="success"
        show={showAlert}
        onClose={() => setShowAlert(false)}
        dismissible
      >
        User Profile List Updated Successfully!
      </Alert>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Date Of Birth</th>
            <th>Email</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <User user={user} />
            </tr>
          ))}
        </tbody>
      </table>
      <CreateFormModelWindowHelper
        show={show}
        handleClose={handleClose}
        title="Create User Profile"
      />
    </>
  );
}

export default UserList;
