import { DarkMode } from "@mui/icons-material";
import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";
import React from 'react';

const INITIAL_STATE ={
    darkMode:false,
}

export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({children}) => {


    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

    return (<DarkModeContext.Provider value={{ darkMode: state.darkMode , dispatch}}>
        {children}
    </DarkModeContext.Provider>
    );
    
};