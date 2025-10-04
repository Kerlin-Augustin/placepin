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
    <NavLink className="nav-link" to=""><SidebarButton buttonText="Tenants" /></NavLink>,
    <NavLink className="nav-link" to=""><SidebarButton buttonText="Properties" /></NavLink>,
    <NavLink className="nav-link" to=""><SidebarButton buttonText="Billing & Payments" /></NavLink>,
    <NavLink className="nav-link" to=""><SidebarButton buttonText="Perk Adoption" /></NavLink>,
    <NavLink className="nav-link" to=""><SidebarButton buttonText="Messaging" /></NavLink>,
    <NavLink className="nav-link" to=""><SidebarButton buttonText="Insights" /></NavLink>,]

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
          PlacePin
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