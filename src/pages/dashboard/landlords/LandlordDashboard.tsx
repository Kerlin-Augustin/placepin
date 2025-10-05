import { Outlet } from "react-router-dom";
import LandlordSidebar from "../../../components/sidebars/landord/LandlordSidebar";
import LandlordHeader from "../../../components/headers/landlord/LandlordHeader";
import './landlordDashboard.css';

const LandlordDashboard = () => {
  return (
    <div className="landlordDashboardContainer">
      <LandlordSidebar />
      <div className="landlordHeaderBody">
        <LandlordHeader username={'Jebadiha Bitches Freeman'} />
        <Outlet />
      </div>
    </div>
  )
}

export default LandlordDashboard