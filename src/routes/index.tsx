import { Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "../components/ProductsPage";
import Home from "../pages/Home";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path='product' element={<ProductsPage/>}/>
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default RoutesMain;