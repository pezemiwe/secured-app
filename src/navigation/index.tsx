import { ROUTES } from "./routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "../Keycloak";
import EmptyPage from "../pages/Empty";
import PrivateRoute from "../components/common/PrivateRoutes";
import PublicRoute from "../components/common/PublicRoutes";
import Userboard from "../pages/Userboard";
import { NavbarContainer } from "../components/common";

export const AllRoutes = () => {
  return (
    <>
      <ReactKeycloakProvider authClient={keycloak}>
        <Routes>
          <Route element={<NavbarContainer />}>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <LandingPage />
                </PublicRoute>
              }
            />
            <Route
              path={ROUTES.dashboard}
              element={
                <PrivateRoute>
                  <Userboard />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </ReactKeycloakProvider>
    </>
  );
};

const ManageSession = () => {
  return <AllRoutes />;
};
export default function Navigation() {
  return (
    <BrowserRouter>
      <ManageSession />
    </BrowserRouter>
  );
}
