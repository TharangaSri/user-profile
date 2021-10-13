import User from "./User";

function UserList() {
  return (
    <>
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>user list</h2>
              </div>
              <div className="col-sm-6"></div>
            </div>
          </div>
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
          </tr>
        </thead>
        <tbody>
          <User />
        </tbody>
      </table>
    </>
  );
}

export default UserList;
