import { createContext, useContext, useState } from "react";

export const UserLoggedContext = createContext([]);

export const UserLoggedProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState([]);

  return (
    <UserLoggedContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </UserLoggedContext.Provider>
  );
};
export const useUserLogged = () => useContext(UserLoggedContext);
