import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import User from "./User";

function UserList() {
  const { users } = useContext(UserContext);
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              <b>Fusiongrove</b> <i>Profile Manager</i>
            </h2>
          </div>
          <div className="col-sm-6"></div>
        </div>
      </div>
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
    </>
  );
}

export default UserList;
