import type { RouteObject } from "react-router-dom";
import LandingPage from "../home/LandingPage";

const routes: RouteObject[] = [
  { path: '/', element: <LandingPage /> },
]

export default routes