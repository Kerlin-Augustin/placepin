import { NavLink } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import SidebarButton from "../../buttons/SidebarButton";
import './landlordSidebar.css';

const LandlordSidebar = () => {

  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleSignout = () => {
    logout()
    navigate('/')
  }

  const tabs = [
    <NavLink className="nav-link" to="landlordtenants"><SidebarButton buttonText="Tenants" /></NavLink>,
    <NavLink className="nav-link" to="landlordproperties"><SidebarButton buttonText="Properties" /></NavLink>,
    <NavLink className="nav-link" to="landlordmessaging"><SidebarButton buttonText="Messaging" /></NavLink>,
    <NavLink className="nav-link" to="landlordtenantinsights"><SidebarButton buttonText="Tenant Insights" /></NavLink>,
    <NavLink className="nav-link" to="landlordvendors"><SidebarButton buttonText="Vendors" /></NavLink>,
    <NavLink className="nav-link" to="landlordbillingpayments"><SidebarButton buttonText="Billing & Payments" /></NavLink>,]

    const allTabs = tabs.map((tab, index) => {
      return (
        <div key={index}>{tab}</div>
      )
    })

  return (
    <>
      <aside className="sideBarContainer">
      <div className="logoAndTabs">
        <h2 className="logoText">
          <NavLink className="nav-link" to="">
          PlacePin
          </NavLink>
        </h2>
        <div className="tabs">
          {allTabs}
        </div>
      </div>
      <div className="profile">
        <h3
          className="profileText"
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