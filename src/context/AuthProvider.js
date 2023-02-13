import { createContext, useState } from "react";

export const AuthContext=createContext();




const AuthProvider = ({children}) => {
    const [currentUser,setcurrentUser]=useState(null);

    const authInfo={
        currentUser,
        setcurrentUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;