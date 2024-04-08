import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

const PrivateRouteAuth = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsAuthenticated(true);
      navigate("/");
    } else {
      setIsAuthenticated(false);
    }
  }, [navigate]);

  return isAuthenticated ? null : <AuthLayout>{children}</AuthLayout>;
};
export default PrivateRouteAuth;
