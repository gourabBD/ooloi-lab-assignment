import React, { createContext,  useState } from 'react';


export const AuthContext = createContext();



const AuthProvider = ({children}) => {
    const [normalState,setNormalState]=useState(true)
   
    const authInfo = {
        setNormalState,normalState
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;