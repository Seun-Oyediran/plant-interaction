export enum ActionType {}

export interface SetChairColor {
  type: ActionType;
  payload: any;
}

export type AppActions = SetChairColor;
