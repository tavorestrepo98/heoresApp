import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        } />


        <Route path="/*" element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
        } />

        <Route path="/*" element={ <DashboardRoutes /> } />

      </Routes>
    </BrowserRouter>
  );
};
