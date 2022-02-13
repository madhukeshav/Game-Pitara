import React,  { createContext, useContext, useReducer } from "react";

// setup data layer
export const StateContext = createContext();

// BUILD PROVIDER
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we use inside a component
export const useStateValue = () => useContext(StateContext);