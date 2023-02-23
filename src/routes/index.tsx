import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AdmPage from "../pages/ProfileViewAdm";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/admview" element={<AdmPage />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default RoutesMain;
