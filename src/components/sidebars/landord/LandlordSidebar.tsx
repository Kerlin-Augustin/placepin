import { NavLink, useLocation } from "react-router-dom";
import styles from './landlordSidebar.module.css';
import { Home, Users, MessageCircle, BarChart, Briefcase, CreditCard } from 'lucide-react';
import { LANDLORD_ROUTES } from "../../../routes/landlordRoutes";

const LandlordSidebar = () => {
  const location = useLocation();

  const tabs = [
    { path: LANDLORD_ROUTES.TENANTS, text: "Tenants", icon: <Users size={18} /> },
    { path: LANDLORD_ROUTES.PROPERTIES, text: "Properties", icon: <Home size={18} /> },
    { path: LANDLORD_ROUTES.MESSAGING, text: "Messaging", icon: <MessageCircle size={18} /> },
    { path: LANDLORD_ROUTES.INSIGHTS, text: "Tenant Insights", icon: <BarChart size={18} /> },
    { path: LANDLORD_ROUTES.VENDORS, text: "Vendors", icon: <Briefcase size={18} /> },
    { path: LANDLORD_ROUTES.BILLING, text: "Billing & Payments", icon: <CreditCard size={18} /> },
  ];

  return (
    <aside className={styles.sideBarContainer}>
      <div className={styles.logoAndTabs}>
        <NavLink className={styles.navLink} to="">
          <h1 className={styles.logoText}>PlacePin</h1>
        </NavLink>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={styles.navLink}
            >
              <div
                className={`${styles.sidebarItem} ${location.pathname.includes(tab.path) ? 'active' : ''
                  }`}
              >
                {tab.icon}
                <span style={{ marginLeft: "0.75rem" }}>{tab.text}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default LandlordSidebar;
