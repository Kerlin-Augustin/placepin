import { NavLink } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import SidebarButton from "../../buttons/SidebarButton";
import styles from './landlordSidebar.module.css';

const LandlordSidebar = () => {

  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleSignout = () => {
    logout()
    navigate('/')
  }

  const tabs = [
    <NavLink className={styles.navLink} to="landlordtenants"><SidebarButton buttonText="Tenants" /></NavLink>,
    <NavLink className={styles.navLink} to="landlordproperties"><SidebarButton buttonText="Properties" /></NavLink>,
    <NavLink className={styles.navLink} to="landlordmessaging"><SidebarButton buttonText="Messaging" /></NavLink>,
    <NavLink className={styles.navLink} to="landlordtenantinsights"><SidebarButton buttonText="Tenant Insights" /></NavLink>,
    <NavLink className={styles.navLink} to="landlordvendors"><SidebarButton buttonText="Vendors" /></NavLink>,
    <NavLink className={styles.navLink} to="landlordbillingpayments"><SidebarButton buttonText="Billing & Payments" /></NavLink>,]

    const allTabs = tabs.map((tab, index) => {
      return (
        <div key={index}>{tab}</div>
      )
    })

  return (
    <>
      <aside className={styles.sideBarContainer}>
      <div className={styles.logoAndTabs}>
        <h2 className={styles.logoText}>
          <NavLink className={styles.navLink} to="">
          PlacePin
          </NavLink>
        </h2>
        <div className={styles.tabs}>
          {allTabs}
        </div>
      </div>
      <div className={styles.profile}>
        <h3
          className={styles.profileText}
          onClick={handleSignout}
          >
          Sign Out
        </h3>
      </div>
    </aside>
    </>
  )
}

export default LandlordSidebar