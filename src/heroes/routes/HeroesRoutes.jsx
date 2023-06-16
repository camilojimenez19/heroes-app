import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { NavBar } from "../../ui";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => (
  <>
    <NavBar />

    <div className="container">
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />

        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:heroId" element={<HeroPage />} />


        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </div>
  </>
);
