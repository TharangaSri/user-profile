import { createContext, useState, useEffect } from "react";
import axios from "axios";

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

  //Load user profile list
  const fetchUsers = async () => {
    try {
      let response = await axios({
        method: "get",
        url: `/users/`,
        json: true,
      });
      return await response.data;
      // return response;
    } catch (err) {
      console.error(err);
    }
  };

  //Create user profile
  const createUserProfile = async (user) => {
    try {
      let res = await axios({
        method: "post",
        headers: {
          "Content-type": "application/json",
          //"Content-Type": "multipart/form-data",
        },
        url: `/users/`,
        json: true,
        data: JSON.stringify(user),
      });
      const data = await res.data;
      setUsers([...users, data]);
      // return response;
    } catch (err) {
      console.error(err);
    }
  };

  //Edit user profile
  const editUserProfile = (id, editUserProfile) => {
    setUsers(users.map((user) => (user.id === id ? editUserProfile : user)));
  };

  //Delete Profile
  const deleteUserProfile = async (id) => {
    try {
      await axios({
        method: "delete",
        url: `/users/${id}`,
        json: true,
      });
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      console.error(err);
    }
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
