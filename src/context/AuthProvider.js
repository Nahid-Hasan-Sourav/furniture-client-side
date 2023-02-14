import { createContext, useEffect, useState } from "react";
import { getRole } from "../Api/UserRole";

export const AuthContext=createContext();




const AuthProvider = ({children}) => {
    const [currentUser,setcurrentUser]=useState(null);
    const [userRole,setuserRole]=useState('')

    useEffect(()=>{
        const newST = JSON.parse(localStorage.getItem("loginUser"));
        console.log("From local storage",newST)
        setcurrentUser(newST)

    },[])

    useEffect(()=>{
        
          getRole(currentUser?.email)
          .then((data)=>{
            // console.log("User Role from context api :",data.userRole)
            setuserRole(data.userRole)
          })
          .catch(err=>console.log("Error",err))
      },[currentUser])
   
    const authInfo={
        currentUser,
        setcurrentUser,
        userRole
    }
    console.log("This is from context api",userRole);
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;