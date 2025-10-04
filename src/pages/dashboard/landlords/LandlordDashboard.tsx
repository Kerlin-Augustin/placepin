import { Outlet } from "react-router-dom";
import LandlordSidebar from "../../../components/sidebars/landord/LandlordSidebar";
import './landlordDashboard.css';

const LandlordDashboard = () => {
  return (
    <div className="landlordDashboardContainer">
      <LandlordSidebar />
      <Outlet />
    </div>
  )
}

export default LandlordDashboard