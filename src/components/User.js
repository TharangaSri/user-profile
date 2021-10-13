import { useState, useEffect } from "react";
import EditFormModelWindowHelpers from "../utils/EditFormModelWindowHelpers";
import ImageHelpers from "../utils/ImageHelpers";

function User({ user }) {
  //Edit Form - Show/Hide state of model window
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  //Colse model window after submit
  useEffect(() => {
    handleClose();
  }, [user]);
  return (
    <>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.address}</td>
      <td>{user.contact}</td>
      <td>{user.dateofbirth}</td>
      <td>{user.email}</td>
      <td>
        <ImageHelpers src={user.image} />
      </td>
      <td>
        <button
          onClick={handleShow}
          className="btn text-warning btn-act"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </button>
      </td>
      <td>
        <button className="btn text-danger btn-act">
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </button>
      </td>
      <EditFormModelWindowHelpers
        show={show}
        handleClose={handleClose}
        title="Edit User Profile"
        user={user}
      />
    </>
  );
}

export default User;
