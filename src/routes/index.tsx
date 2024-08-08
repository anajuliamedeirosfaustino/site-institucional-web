import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import siteMap from "./siteMap";
import Login from "pages/Login";
import Home from "pages/Home";

const Navigation: React.FC = () => (
  <Routes>
    {/* auth */}
    <Route path="/" element={<Navigate to={siteMap.public.auth.login} />} />
    <Route path={siteMap.public.auth.login} element={<Login />} />
    <Route path={siteMap.protected.home} element={<Home />} />
  </Routes>
);

export default Navigation;
