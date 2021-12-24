/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

interface Props {
  children: any;
}

export const PublicRoute = ({children}: Props) => {

  const { user } = useContext(AuthContext);

  return user.logged
    ? <Navigate to="/" />
    : children;
};
