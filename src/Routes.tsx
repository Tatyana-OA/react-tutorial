import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppWrap from "./AppWrap";
import Contacts from "./Contacts";
import Home from "./Home";
import News from "./News";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppWrap />}>
        {/* OUTLET */}
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
