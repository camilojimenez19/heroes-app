import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";

import { PrivateRoutes } from "./PrivateRoutes";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <HeroesRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
