import { Outlet } from "react-router-dom";
import LandlordSidebar from "../../../components/sidebars/landord/LandlordSidebar";
import LandlordHeader from "../../../components/headers/landlord/LandlordHeader";
import styles from './landlordDashboard.module.css';

const LandlordDashboard = () => {
  return (
    <div className={styles.landlordDashboardContainer}>
      <LandlordSidebar />
      <div className={styles.landlordHeaderBody}>
        <LandlordHeader username={'Jebadiha Bitches Freeman'} />
        <Outlet />
      </div>
    </div>
  )
}

export default LandlordDashboard