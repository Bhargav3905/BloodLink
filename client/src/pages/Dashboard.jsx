import DashboardLayout from '../layouts/DashboardLayout';
import { useAuth } from '../contexts/AuthContext';

import AdminHome from '../features/admin/components/AdminHome';
import HospitalHome from '../features/hospital/components/HospitalHome';
import DonorHome from '../features/donor/components/DonorHome';
import PatientHome from '../features/patient/components/PatientHome';

import { ROLES } from '../constants/roles';

const Dashboard = () => {
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case ROLES.ADMIN:
        return <AdminHome />;

      case ROLES.HOSPITAL:
        return <HospitalHome />;

      case ROLES.DONOR:
        return <DonorHome />;

      case ROLES.PATIENT:
      default:
        return <PatientHome />;
    }
  };

  return <DashboardLayout>{renderDashboard()}</DashboardLayout>;
};

export default Dashboard;
