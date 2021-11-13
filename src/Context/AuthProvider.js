import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

// LInks------------------------------



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allcontext = useFirebase()

    return (
        <AuthContext.Provider value={allcontext}>

            {children}
        </AuthContext.Provider>
    );
};
// use it for all
export default AuthProvider;