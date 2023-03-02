import { Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "../components/ProductsPage";


import Home from "../pages/Home";
import Login from "../pages/Login";
import AdmPage from "../pages/ProfileViewAdm";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admview" element={<AdmPage />} />
      <Route path="/product/:productId" element={<ProductsPage />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default RoutesMain;
