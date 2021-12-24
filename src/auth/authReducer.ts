import { Reducer } from "react";

import { AuthState, AuthAction } from "../models/state.model";
import { types } from "../types";

export const authReducer: Reducer<AuthState, AuthAction> = (
  state: AuthState = {},
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true
      };

    case types.logout:
      return {
        logged: false
      };

    default:
      return state;
  }
};
