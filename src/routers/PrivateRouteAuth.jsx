import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return isAuthenticated ? null : children;
};
export default PrivateRouteAuth;
