import type { RouteObject } from "react-router-dom";
import LandingPage from "../pages/home/LandingPage";
import SignupPage from "../pages/auth/signup/SignupPage";
import LoginPage from "../pages/auth/login/LoginPage";
import Dashboard from "../pages/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Perks from "../pages/dashboard/perks/Perks";

const routes: RouteObject[] = [
  { path: '/', element: <LandingPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/login', element: <LoginPage /> },
  {
    path: '/dashboard', element: <PrivateRoute />,
    children: [
      {
        path: '',
        element: <Dashboard />,
        children: [
          {path: 'perks', element: <Perks />}
        ]
      }
    ]
  }
]

export default routes