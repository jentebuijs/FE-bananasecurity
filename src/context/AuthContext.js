import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [ auth, toggleAuth ] = useState({
        isAuth: false,
        user: null
    });
    const history = useHistory();

    function login() {
        toggleAuth({
            isAuth: true,
            user: null
        });
        console.log("Gebruiker is ingelogd!");
        history.push("/profile");
    }

    function logout() {
        toggleAuth({
            isAuth: false,
            user: null
        });
        console.log("Gebruiker is uitgelogd");
        history.push("/");
    }

    const contextData = {
        isAuth : auth.isAuth,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthContextProvider;