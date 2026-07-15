import { useEffect, useState } from 'react';

import adminService from '../services/admin.service';

const AdminHome = () => {
  const [overview, setOverview] = useState(null);
  const [inventorySummary, setInventorySummary] = useState(null);
  const [requestStatistics, setRequestStatistics] = useState(null);
  const [donationStatistics, setDonationStatistics] = useState(null);
  const [lowStock, setLowStock] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const [
          overviewResponse,
          inventoryResponse,
          requestResponse,
          donationResponse,
          lowStockResponse,
        ] = await Promise.all([
          adminService.getOverview(),
          adminService.getInventorySummary(),
          adminService.getRequestStatistics(),
          adminService.getDonationStatistics(),
          adminService.getLowStock(),
        ]);

        setOverview(overviewResponse.data);
        setInventorySummary(inventoryResponse.data);
        setRequestStatistics(requestResponse.data);
        setDonationStatistics(donationResponse.data);
        setLowStock(lowStockResponse.data);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-slate-500">Monitor users, requests and inventory.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <div title="Total Users" value={overview?.totalUsers || 0}></div>
        <div title="Total Donors" value={overview?.totalDonors || 0}></div>
        <div title="Total Patients" value={overview?.totalPatients || 0}></div>
        <div title="Total Hospitals" value={overview?.totalHospitals || 0}></div>
        <div title="Pending Approvals" value={overview?.pendingApprovals || 0}></div>
        <div title="Completed Requests" value={overview?.completedRequests || 0}></div>
        <div title="Inventory Units" value={inventorySummary?.totalUnits || 0}></div>
        <div title="Total Donations" value={donationStatistics?.totalDonations || 0}></div>
        <div title="Pending Requests" value={requestStatistics?.pending || 0}></div>
        <div title="Rejected Requests" value={requestStatistics?.rejected || 0}></div>
      </div>

      <div className="mt-10 rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-bold">Low Stock Blood Groups</h2>

        {lowStock.length === 0 ? (
          <p>No low stock blood groups.</p>
        ) : (
          <ul className="space-y-2">
            {lowStock.map((item) => (
              <li key={item.bloodGroup}>
                {item.bloodGroup} - {item.quantity} Units
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default AdminHome;
