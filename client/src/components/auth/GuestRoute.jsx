import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';
import { useAuth } from '../../contexts/AuthContext';
import { PageLoader } from '../feedback/loader';

const GuestRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <PageLoader />;
  }

  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <Outlet />;
};

export default GuestRoute;
