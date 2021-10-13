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
        <button>Edit</button>
      </td>
      <td>
        <button>Delete</button>
      </td>
    </>
  );
}

export default User;
