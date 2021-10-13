import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers();
      setUsers(usersFromServer);
    };
    getUsers();
  }, []);

  // Fetch Users
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    return data;
  };

  //Create User Profile
  const createUserProfile = (
    firstname,
    lastname,
    address,
    contact,
    dateofbirth,
    email,
    image
  ) => {
    setUsers([
      ...users,
      {
        id: uuidv4(),
        firstname,
        lastname,
        address,
        contact,
        dateofbirth,
        email,
        image,
      },
    ]);
  };

  //Edit User Profile
  const editUserProfile = (id, editUserProfile) => {
    setUsers(users.map((user) => (user.id === id ? editUserProfile : user)));
  };

  //Delete User Profile
  const deleteUserProfile = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <UserContext.Provider
      value={{ users, createUserProfile, editUserProfile, deleteUserProfile }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
