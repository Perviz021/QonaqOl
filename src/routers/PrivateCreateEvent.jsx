import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRouteCreateEvent = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      navigate("/");
    }
  }, [navigate]);

  return isAuthenticated ? children : null;
};
export default PrivateRouteCreateEvent;
