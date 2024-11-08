import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const updateUserData = () => {
    const { employee, admin } = getLocalStorage();
    setUserData({ employee, admin });
  };

  useEffect(() => {
    // Fetch initial data from localStorage
    updateUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ userData, updateUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
