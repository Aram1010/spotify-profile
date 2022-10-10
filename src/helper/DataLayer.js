import React, { createContext, useContext, useReducer } from "react";

export const DataLayercontext = createContext();
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayercontext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayercontext.Provider>
);

export const Data_layer_value = 
() => useContext(DataLayercontext)

