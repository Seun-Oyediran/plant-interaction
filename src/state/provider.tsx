"use client";
import React, { ReactNode, useReducer } from "react";
import { AppContext } from "./context";
import { appReducer } from "./reducer";
import { initialAppState } from "./state";

interface IProps {
  children: ReactNode;
}

export default function Provider(props: IProps) {
  const { children } = props;
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
