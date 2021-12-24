/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

interface Props {
  children: any;
}

export const PrivateRoute = ({children}: Props) => {

  const { user } = useContext(AuthContext);

  if(!user.logged) return <Navigate to="/login" />;

  return children;
};
