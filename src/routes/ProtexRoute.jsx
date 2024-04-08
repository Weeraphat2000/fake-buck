import React from "react";
import { Navigate } from "react-router-dom";

function ProtexRoute({ children }) {
  let user = "hun";
  // ไปที่หน้า /login
  if (!user) return <Navigate to="/login" />;
  // ไปที่ children   อยู่หน้า router
  return children;
}

export default ProtexRoute;
