import type { RouteObject } from "react-router-dom";
import LandingPage from "../pages/home/LandingPage";
import SignupPage from "../pages/auth/signup/SignupPage";
import LoginPage from "../pages/auth/login/LoginPage";
import LandlordDashboard from "../pages/dashboard/landlords/LandlordDashboard";
import TenantDashboard from "../pages/dashboard/tenants/TenantDashboard";
import PrivateRoute from "./PrivateRoute";
import LandlordTenants from "../pages/dashboard/landlords/landlordTenants/LandlordTenants";
import LandlordHomepage from "../pages/dashboard/landlords/landlordHomepage/LandlordHomepage";

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
          {path: '', element: <LandlordHomepage />},
          {path: 'tenants', element: <LandlordTenants />},
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
          {path: '', element: <LandlordTenants />},
        ]
      }
    ]
  }
]

export default routes