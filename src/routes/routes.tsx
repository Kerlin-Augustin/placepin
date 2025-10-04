import type { RouteObject } from "react-router-dom";
import LandingPage from "../pages/home/LandingPage";
import SignupPage from "../pages/auth/signup/SignupPage";
import LoginPage from "../pages/auth/login/LoginPage";
import LandlordDashboard from "../pages/dashboard/landlords/LandlordDashboard";
import TenantDashboard from "../pages/dashboard/tenants/TenantDashboard";
import PrivateRoute from "./PrivateRoute";
import LandlordTenants from "../pages/dashboard/landlords/landlordTenants/LandlordTenants";
import LandlordHomepage from "../pages/dashboard/landlords/landlordHomepage/LandlordHomepage";
import LandlordProperties from "../pages/dashboard/landlords/landlordProperties/LandlordProperties";
import LandlordBillingPayments from "../pages/dashboard/landlords/landlordBillingPayments/LandlordBillingPayments";
import LandlordTenantInsights from "../pages/dashboard/landlords/landlordTenantInsights/LandlordTenantInsights";
import LandlordMessaging from "../pages/dashboard/landlords/landlordMessaging/LandlordMessaging";
import LandlordVendors from "../pages/dashboard/landlords/landlordVendors/LandlordVendors";

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
          {path: 'landlordtenants', element: <LandlordTenants />},
          {path: 'landlordproperties', element: <LandlordProperties />},
          {path: 'landlordbillingpayments', element: <LandlordBillingPayments />},
          {path: 'landlordtenantinsights', element: <LandlordTenantInsights />},
          {path: 'landlordvendors', element: <LandlordVendors />},
          {path: 'landlordmessaging', element: <LandlordMessaging />},
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