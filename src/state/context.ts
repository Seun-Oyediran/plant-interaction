import React from "react";
import { AppState, initialAppState } from "./state";
import { AppActions } from "./actions";

export const AppContext = React.createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppActions>;
}>({
  state: initialAppState,
  dispatch: () => undefined,
});
