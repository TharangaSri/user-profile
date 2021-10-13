function User({ user }) {
  return (
    <>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.address}</td>
      <td>{user.contact}</td>
      <td>{user.dateofbirth}</td>
      <td>{user.email}</td>
      <td>{user.image}</td>
    </>
  );
}

export default User;
