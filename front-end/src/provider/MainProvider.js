import React, { useReducer } from "react";
import { MainContext, MainDispatchContext } from "../context/mainContext";
import { initialState, mainReducer } from "../reducer/mainReducer";

export default function MainProvider({ children }) {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <MainContext.Provider value={state}>
      <MainDispatchContext.Provider value={dispatch}>
        {children}
      </MainDispatchContext.Provider>
    </MainContext.Provider>
  );
}
