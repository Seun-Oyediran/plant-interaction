import { AppActions } from "./actions";
import { AppState } from "./state";

export function appReducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {
    default:
      return state;
  }
}
