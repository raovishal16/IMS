import { Outlet, Navigate } from "react-router-dom";
import Header from "../Components/Header/Header";

const ProtectedRoutes = () => {
  let getAdminToken = JSON.parse(localStorage.getItem("token"));
  return getAdminToken ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/register" />
  );
};
export default ProtectedRoutes();
