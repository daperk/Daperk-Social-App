import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    const login = () =>{
        //TO DO
        setCurrentUser({
            id:1, 
            name:"Daniel Pena",
            profilePic: 
            "https://lh3.googleusercontent.com/a/ACg8ocJKHD3_8c2c_C86i_YO79tu7dj7o1VL88MMHzj58aIxRDSrDH3l=s288-c-no"
        });
    };

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser]);
    
    return (
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    );

};