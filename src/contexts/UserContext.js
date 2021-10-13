import { useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstname: "Sample First Name",
      lastname: "Sample Last Name",
      address: "Sample Address No 223 Sriyani Bellahtudaw, Bandaragama",
      contact: "+94777744774",
      dateofbirth: "1984-07-26",
      email: "test@test.com",
      image: "sample/image/url.png",
    },
    {
      id: 2,
      firstname: "Sample First Name 01",
      lastname: "Sample Last Name 01",
      address: "Sample Address No 223 Sriyani Bellahtudaw, Bandaragama 01",
      contact: "+94777744774",
      dateofbirth: "1984-07-26",
      email: "test@test.com",
      image: "sample/image/url.png",
    },
  ]);
};
