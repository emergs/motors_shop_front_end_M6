import { Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "../components/ProductsPage";
import Home from "../pages/Home";
import LoginUser from "../pages/LoginUser";
import AdmPage from "../pages/ProfileViewAdm";
import Register from "../pages/Register";

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginUser />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admview" element={<AdmPage />} />
            <Route path="/product/:productId" element={<ProductsPage />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
};

export default RoutesMain;
