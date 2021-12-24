import { types } from '../types';

export interface AuthState {
  name?: string,
  logged?: boolean
}


export interface AuthAction {
  type: types.login | types.logout;
  payload: AuthState;
}
