import { NavLink, useLocation } from "react-router-dom";
import styles from './landlordSidebar.module.css';
import { Home, Users, MessageCircle, BarChart, Briefcase, CreditCard } from 'lucide-react';

const LandlordSidebar = () => {
  const location = useLocation();

  const tabs = [
    { path: "landlordtenants", text: "Tenants", icon: <Users size={18} /> },
    { path: "landlordproperties", text: "Properties", icon: <Home size={18} /> },
    { path: "landlordmessaging", text: "Messaging", icon: <MessageCircle size={18} /> },
    { path: "landlordtenantinsights", text: "Tenant Insights", icon: <BarChart size={18} /> },
    { path: "landlordvendors", text: "Vendors", icon: <Briefcase size={18} /> },
    { path: "landlordbillingpayments", text: "Billing & Payments", icon: <CreditCard size={18} /> },
  ];

  return (
    <aside className={styles.sideBarContainer}>
      <div className={styles.logoAndTabs}>
        <NavLink className={styles.navLink} to="">
          <h2 className={styles.logoText}>PlacePin</h2>
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
