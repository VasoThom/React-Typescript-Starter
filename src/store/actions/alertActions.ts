import { SET_ALERT, AlertAction } from "../types";
export const set_Alert = (message: string): AlertAction => {
  return {
    type: SET_ALERT,
  };
};
