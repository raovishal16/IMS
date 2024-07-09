import { Outlet, Navigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import { useEffect, useState } from "react";

const ProtectedRoutes = () => {
  const [getAdminToken, setGetAdminToken] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const token = localStorage.getItem("token");
      setGetAdminToken(token);
      console.log(getAdminToken, "-----");
    }, 5000);
  }, []);

  return getAdminToken ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/register" />
  );
};

export default ProtectedRoutes;
