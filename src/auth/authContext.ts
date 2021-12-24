import { createContext, Dispatch } from 'react';

import { AuthState, AuthAction } from '../models/state.model';

interface AuthContextState {
  user: AuthState,
  dispatch: Dispatch<AuthAction>
}

export const AuthContext = createContext<AuthContextState>({} as AuthContextState);
