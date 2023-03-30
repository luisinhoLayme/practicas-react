import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LoginScreen from '../components/login/LoginScreen';
import DashboarRoutes from './DashboarRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={ <LoginScreen /> } /> */}

        <Route path="/login" element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />

        <Route path="auth/*" element={
            <PrivateRoute>
              <DashboarRoutes />
            </PrivateRoute>
          }
        />
        {/* <Route path="/*" element={ <DashboarRoutes /> } /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
