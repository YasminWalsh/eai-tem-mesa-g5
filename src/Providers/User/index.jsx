import { createContext, useContext, useState } from 'react';
import { useHome } from '../Home';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userDatas, setUserDatas] = useState([]);

  return (
    <UserContext.Provider value={{ userDatas, setUserDatas }}>
      {children}
    </UserContext.Provider>
  );
};
export const useData = () => useContext(UserContext);
