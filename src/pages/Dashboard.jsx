import React from 'react';
import Navbar from '../components/Navbar';
import StatsCard from '../components/StatsCard';
import SalesTrendChart from '../components/charts/SalesTrendChart';
import CategoryPieChart from '../components/charts/CategoryPieChart';
import InventoryTable from '../components/InventoryTable';
import { QuickActions, RecentActivity } from '../components/RightSidebarWidgets';
import { DollarSign, ClipboardList, Box } from 'lucide-react';

const Dashboard = () => {
  return (
    <>
      <Navbar title="Dashboard" />
      
      <div className="dashboard-content">
        {/* Left side graphics panel */}
        <div className="left-panel">
          <div className="stats-grid">
            <StatsCard title="Total Sales" value="$45,231" change="+12.5%" icon={DollarSign} />
            <StatsCard title="Active Tasks" value="12" change="High Priority" icon={ClipboardList} />
            <StatsCard title="Inventory Items" value="128" change="In Warehouse" icon={Box} />
          </div>

          <div className="charts-grid">
            <SalesTrendChart />
            <CategoryPieChart />
          </div>

          <InventoryTable />
        </div>

        {/* Right side activity log panel */}
        <div className="right-panel">
          <QuickActions />
          <RecentActivity />
        </div>
      </div>
    </>
  );
};

export default Dashboard;