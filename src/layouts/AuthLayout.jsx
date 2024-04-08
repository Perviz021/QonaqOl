import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";
import AppLayout from "./AppLayout";

const AuthLayout = ({ children }) => {
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");

  return (
    <div>{isMobile ? <AppLayout>{children}</AppLayout> : <>{children}</>}</div>
  );
};

export default AuthLayout;
