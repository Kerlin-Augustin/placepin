import type { RouteObject } from "react-router-dom";
import LandingPage from "../pages/home/LandingPage";
import SignupPage from "../pages/auth/signup/SignupPage";
import LoginPage from "../pages/auth/login/LoginPage";
// import Dashboard from "../pages/dashboard/Dashboard";
import LandlordDashboard from "../pages/dashboard/landlords/LandlordDashboard";
import TenantDashboard from "../pages/dashboard/tenants/TenantDashboard";
import PrivateRoute from "./PrivateRoute";
import Perks from "../pages/dashboard/perks/Perks";

const routes: RouteObject[] = [
  { path: '/', element: <LandingPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/login', element: <LoginPage /> },
  {
    path: '/landlorddashboard', element: <PrivateRoute />,
    children: [
      {
        path: '',
        element: <LandlordDashboard />,
        children: [
          {path: 'perks', element: <Perks />}
        ]
      }
    ]
  },
  {
    path: '/tenantdashboard', element: <PrivateRoute />,
    children: [
      {
        path: '',
        element: <TenantDashboard />,
        children: [
          {path: 'perks', element: <Perks />}
        ]
      }
    ]
  }
]

export default routes