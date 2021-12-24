import { useReducer, Reducer, useEffect } from "react";

import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { AuthAction, AuthState } from "./models/state.model";
import { AppRouter } from "./routers/AppRouter";

const init = (): AuthState => {

  const userStorage = localStorage.getItem('user');

  if(userStorage === null) return { logged: false };

  const user: AuthState = JSON.parse(userStorage);

  return user;
};

export const HerosApp = () => {

  const [user, dispatch] = useReducer<Reducer<AuthState, AuthAction>>(
    authReducer,
    {},
    init
  );

  useEffect(() => {
    if(!user) return;
    localStorage.setItem('user', JSON.stringify(user));
  }, [ user ]);

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
