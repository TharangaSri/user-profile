function User({ user }) {
  return (
    <>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.address}</td>
      <td>{user.contact}</td>
      <td>{user.dateofbirth}</td>
      <td>{user.email}</td>
      <td>
        <img src={user.image} width="75px" height="75" />
      </td>
      <td>
        <button className="btn text-warning btn-act">
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
    </>
  );
}

export default User;
