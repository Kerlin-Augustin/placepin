import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = () => {
  const { accessToken } = useAuth()

  // Making sure the access Token exists to get passed private routes
  return accessToken ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRoute
