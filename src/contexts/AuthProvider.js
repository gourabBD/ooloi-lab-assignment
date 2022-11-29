import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [normalState, setNormalState] = useState([]);

  const Info = {
    setNormalState,
    normalState,
  };
  return <AuthContext.Provider value={Info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
