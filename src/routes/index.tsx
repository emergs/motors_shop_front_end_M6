import { Routes, Route, Navigate } from "react-router-dom";
import LoginModal from "../components/Modais/LoginModal";
import ProductsPage from "../components/ProductsPage";


import Home from "../pages/Home";
import Login from "../pages/OldLogin";
import LoginUser from "../pages/LoginUser";
import AdmPage from "../pages/ProfileViewAdm";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login2" element={<LoginUser />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admview" element={<AdmPage />} />
      <Route path="/product/:productId" element={<ProductsPage />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default RoutesMain;
