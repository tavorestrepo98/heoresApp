import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../auth/authContext';
import { AuthAction } from '../../models/state.model';
import { types } from '../../types';

export const LoginScreen = () => {

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {

    const action: AuthAction = {
      type: types.login,
      payload: {
        name: 'Gustavo Restrepo Gil',
        logged: true
      }
    };

    dispatch(action);

    navigate('/marvel', {
      replace: true
    });
  };

  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};
